'use client'
import { Particle } from '@/interfaces/particles.types';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PARTICLE_RGB_COLOR } from '@/utils/particles.utils';

export function ParticlesBackground({ particleCount = 120 }: { particleCount?: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext('2d')!
        const section = canvas.parentElement!
        let particles: Particle[] = []
        let mouse = { x: -999, y: -999 }
        let animationFrame: number
        let PARTICLE_COUNT: number = particleCount;
        let isMobile = false;

        gsap.matchMedia().add('(max-width: 768px)', () => {
            isMobile = true;
            PARTICLE_COUNT = particleCount - (particleCount * 0.4);
        });

        const PARTICLE_SPEED = 0.5
        const LINK_DISTANCE = 110
        const LINK_DISTANCE_SQ = LINK_DISTANCE * LINK_DISTANCE
        const MOUSE_RADIUS = 250
        const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS

        const resize = () => {
            canvas.width = section.clientWidth
            canvas.height = section.clientHeight
            init()
        }

        const init = () => {
            particles = Array.from({ length: PARTICLE_COUNT }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                velocityX: (Math.random() - 0.5) * PARTICLE_SPEED,
                velocityY: (Math.random() - 0.5) * PARTICLE_SPEED,
                radius: Math.random() * 1.5 + 0.8,
            }))
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            const canvasWidth = canvas.width
            const canvasHeight = canvas.height

            for (const particle of particles) {
                particle.x = (particle.x + particle.velocityX + canvasWidth) % canvasWidth
                particle.y = (particle.y + particle.velocityY + canvasHeight) % canvasHeight
            }

            for (let indexA = 0; indexA < particles.length; indexA++) {
                const particleA = particles[indexA]

                for (let indexB = indexA + 1; indexB < particles.length; indexB++) {
                    const particleB = particles[indexB]
                    const deltaX = particleA.x - particleB.x
                    const deltaY = particleA.y - particleB.y
                    const distanceSq = deltaX * deltaX + deltaY * deltaY

                    if (distanceSq < LINK_DISTANCE_SQ) {
                        const opacity = (1 - distanceSq / LINK_DISTANCE_SQ) * 0.35
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(${PARTICLE_RGB_COLOR},${opacity})`
                        ctx.lineWidth = 0.6
                        ctx.moveTo(particleA.x, particleA.y)
                        ctx.lineTo(particleB.x, particleB.y)
                        ctx.stroke()
                    }
                }

                const mouseDeltaX = particleA.x - mouse.x
                const mouseDeltaY = particleA.y - mouse.y
                const mouseDistanceSq = mouseDeltaX * mouseDeltaX + mouseDeltaY * mouseDeltaY

                if (mouseDistanceSq < MOUSE_RADIUS_SQ) {
                    const mouseOpacity = (1 - mouseDistanceSq / MOUSE_RADIUS_SQ) * 0.6
                    ctx.beginPath()
                    ctx.strokeStyle = `rgba(${PARTICLE_RGB_COLOR},${mouseOpacity})`
                    ctx.lineWidth = 0.8
                    ctx.moveTo(particleA.x, particleA.y)
                    ctx.lineTo(mouse.x, mouse.y)
                    ctx.stroke()
                }

                ctx.beginPath()
                ctx.arc(particleA.x, particleA.y, particleA.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${PARTICLE_RGB_COLOR},0.75)`
                ctx.fill()
            }

            animationFrame = requestAnimationFrame(draw)
        }

        const onMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouse = { x: event.clientX - rect.left, y: event.clientY - rect.top }
        }
        const onMouseLeave = () => { mouse = { x: -999, y: -999 } }

        resize()
        draw()
        if (!isMobile) {
            window.addEventListener('resize', resize)
        }
        section.addEventListener('mousemove', onMouseMove)
        section.addEventListener('mouseleave', onMouseLeave)

        return () => {
            cancelAnimationFrame(animationFrame)
            if (!isMobile) {
                window.removeEventListener('resize', resize)
            }
            section.removeEventListener('mousemove', onMouseMove)
            section.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    )
}