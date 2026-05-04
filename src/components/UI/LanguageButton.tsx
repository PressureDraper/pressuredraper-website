import { useState } from "react";

export const LanguageButton = () => {
    const [lang, setLang] = useState<string>("en");

    return (
        <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="ml-10 cursor-pointer border border-primary-500 rounded-full p-0.5"
            aria-label="Change language"
        >
            {
                lang === "en" ?
                    <svg
                        width={22}
                        height={22}
                        viewBox="0 0 140 140"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <clipPath id="clip-usa-btn">
                                <circle cx="70" cy="70" r="70" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#clip-usa-btn)">
                            <rect width="140" height="140" fill="#B22234" />
                            {[0, 2, 4, 6, 8, 10, 12].map((i) => (
                                <rect key={i} y={i * 10.77} width="140" height="10.77" fill="#fff" />
                            ))}
                            <rect width="58" height="75.38" fill="#3C3B6E" />
                            {[37, 53, 69, 85, 101].map((y, ri) =>
                                [138, 149, 160, 171, 182].map((x) => (
                                    <circle key={`${ri}-${x}`} cx={x - 130} cy={y - 30} r="2.5" fill="#fff" />
                                ))
                            )}
                            {[45, 61, 77, 93].map((y, ri) =>
                                [143.5, 154.5, 165.5, 176.5].map((x) => (
                                    <circle key={`off-${ri}-${x}`} cx={x - 130} cy={y - 30} r="2.5" fill="#fff" />
                                ))
                            )}
                        </g>
                        <circle cx="70" cy="70" r="69" fill="none" stroke="#D1D5DB" strokeWidth="2" />
                    </svg>
                    :
                    <svg
                        width={22}
                        height={22}
                        viewBox="0 0 140 140"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <clipPath id="clip-mex-btn">
                                <circle cx="70" cy="70" r="70" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#clip-mex-btn)">
                            <rect width="46.67" height="140" fill="#006847" />
                            <rect x="46.67" width="46.67" height="140" fill="#fff" />
                            <rect x="93.33" width="46.67" height="140" fill="#CE1126" />

                            <ellipse cx="70" cy="70" rx="13" ry="16" fill="#8B6914" />
                            <rect x="67" y="60" width="6" height="18" fill="#2D7A2D" rx="3" />
                            <rect x="60" y="64" width="7" height="4" fill="#2D7A2D" rx="2" />
                            <rect x="73" y="66" width="7" height="4" fill="#2D7A2D" rx="2" />
                            <path d="M62 73 Q70 82 78 73" fill="none" stroke="#8B1A1A" strokeWidth="2.5" strokeLinecap="round" />
                            <circle cx="70" cy="57" r="7" fill="#6B4F12" />
                            <ellipse cx="62" cy="61" rx="6" ry="3" fill="#6B4F12" transform="rotate(-20 62 61)" />
                            <ellipse cx="78" cy="61" rx="6" ry="3" fill="#6B4F12" transform="rotate(20 78 61)" />
                        </g>
                        <circle cx="70" cy="70" r="69" fill="none" stroke="#D1D5DB" strokeWidth="2" />
                    </svg>
            }
        </button>
    )
}
