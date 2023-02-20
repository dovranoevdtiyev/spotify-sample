import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import artist from '../artist.json'

export const useCounterStore=defineStore('song', ()=>{
    state:()=>({
        isPlaying:false,
        audio:null,
        currentArtist:null,
        currentTrack:null

    }),
    actions: {
        loadSong(artist, track) {
            this.currentArtist=artist
            this.currentTrack=track
            if (this.audio && this.audio.src){
                this.audio.pause()
                this.isPlaying=false
                this.audio.src=''
            }
            this.audio=new Audio()
            this.audio.src=track.path
            setTimeout(()=>{
                this.isPlaying=true
                this.audio.play()
            },200)
        },
        playOrpauseThisSong(artist.track){
            if(!this.audio || !this.audio.src || (this.currentTrack.id !==track.id)){
                this.loadSong(artist,track)
                return
            }
            this.playOrpauseSong()
        },
        prevSong(currentTrack){
            let track=artist.tracks[currentTrack.id-2]
            this.loadSong(artist,track)
        },
        nextSong(currentTrack){
            if(currentTrack.id===artists.tracks.length){
                let track=artist.tracks[0]
                this.loadSong(artist,track)
            }else{
                let track=artist.tracks[currentTrack.id]
                this.loadSong(artist,track)
            }
        },
        playFormFirst(){
            this.resetState()
            let track=artist.tracks[0]
            this.loadSong(artist.track)
        },
        resetState(){
            this.isPlaying=false
            this.audio=null
            this.currentArtist=null
            this.currentTrack=null
        }

    }
})
