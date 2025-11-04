export interface ITrackList {
    url: string;
    borderShadow: string;
    boxShadow: string;
}

export interface IAudioPlayerProps {
    currentSong: ITrackList;
    setCurrentSong: any;
}