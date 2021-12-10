import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
   
    {id:1,playingDate:new Date(2021,8,10),HomeTeam: 'NAVI',
    AwayTeam:'EVOS',HomeScore:3,AwayScore:2,
    RefName:'Sentinel',notes:'Pertandingan Overtime'},
    {id:2,playingDate:new Date(2021,8,11),HomeTeam: 'EVOS',
    AwayTeam:'NinjaInPjamas',HomeScore:4,AwayScore:2,
    RefName:'asep',notes:'Pertandingan ngelek'},
    {id:3,playingDate:new Date(2021,8,13),HomeTeam: 'Cloud9',
    AwayTeam:'Barcelona',HomeScore:2,AwayScore:4,
    RefName:'anton',notes:'Pertandingan ada kerusuhan'},
    {id:4,playingDate:new Date(2021,8,14),HomeTeam: 'RRQ',
    AwayTeam:'natusvincere',HomeScore:2,AwayScore:4,
    RefName:'sopo',notes:'Pertandingan 3 kartu merah dari persib'},
    {id:5,playingDate:new Date(2021,8,15),HomeTeam: 'bayern',
    AwayTeam:'PERIB',HomeScore:2,AwayScore:3,
    RefName:'TokDalang',notes:'Pertandingan aman'},
]

export const TEAMS:Team [] = [
    {id:1,name:'EVOS',type:'Over 30'},
    {id:2,name:'NAVI',type:'Over 30'},
    {id:3,name:'NinjaInPjamas',type:'Over 30'},
    {id:4,name:'Cloud9',type:'Over 30'},
    {id:5,name:'RRQ',type:'Over 30'},
    {id:6,name:'natusvincere',type:'Over 30'},
]