import Vue from 'vue'
import Router from 'vue-router'
import Picco from '@/components/Picco'
import GameSelect from '@/components/GameSelect'
import GameName from '@/components/GameName'
import Game from '@/components/Game'
import New from '@/components/New'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'Picco',
        component: Picco,
    },
    {
        path: '/gameselect',
        name: 'Gameselect',
        component: GameSelect,
    },
    {
        path: '/gamename',
        name: 'GameName',
        component: GameName,
        props: true,
    },
    {
        path: '/game',
        name: 'Game',
        component: Game,
        props: true
    },
    {
        path: '/new',
        name: 'New',
        component: New
    }    
  ]
})