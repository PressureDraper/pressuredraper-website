export interface ITrackList {
    url: string;
    borderShadow?: string;
    boxShadow?: string;
    duration?: string;
    title?: string;
    artist?: string;
    picture?: string;
}

export interface IAudioPlayerProps {
    currentSong: ITrackList;
    setCurrentSong: any;
}