const max = 216
const app = Vue.createApp({
    data() {
        return {
            falldata: '',
            results: [],
            message: 'Guten Tag',
            fallnummer:'',
            titel: '',
            cover: '',
            klappentext: '',
            fallnr: '',
            response: '',
            jahr: '',
            dauer: '',
            spotify: '',
            tags: '',
            tagg: '',
            tagh: '',
            tagr: '',
            tags: '',
            tagm: '',
            tagu: '',
            tagsp: '',
            taggirl: '',
            tagt: '',
            tagsch: '',
            tagk: '',
            tagse: ''
        
        }
    },
    methods: {
        async getfalldata(n) {
            if(n == null){
                this.fallnr = Math.floor(Math.random() * max) + 1;
            } else {
                this.fallnr = n
            }
            const res = await fetch('../includes/ddf.json')
            const results = await res.json()
            const falldata = results.serie[this.fallnr]
            this.titel = falldata.titel
            this.cover = falldata.links.cover_kosmos
            const veröffentlichungsjahr = falldata.veröffentlichungsdatum.split('-')
            this.jahr = 'erschienen ' + veröffentlichungsjahr[0] + ' | '
            const dauerarray = falldata.kapitel.slice(-1)
            this.dauer = Math.round(dauerarray[0].end * 1.6666666666667E-5) + 'Min'
            this.klappentext = falldata.beschreibung
            this.spotify = falldata.links.spotify

            //tags check
            this.tagg = falldata.tags.includes('gruselig')
            this.tagh = falldata.tags.includes('hitchcock')
            this.tagr = falldata.tags.includes('raetsel')
            this.tags = falldata.tags.includes('skinny')
            this.tagm = falldata.tags.includes('morton')
            this.tagu = falldata.tags.includes('unterwegs')
            this.tagsp = falldata.tags.includes('spezial')
            this.taggirl = falldata.tags.includes('girlfriend')
            this.tagt = falldata.tags.includes('tiere')
            this.tagsch = falldata.tags.includes('schatz')
            this.tagk = falldata.tags.includes('kunst')
            this.tagse = falldata.tags.includes('sekte')

        },
        gotospotify() {
            window.open(this.spotify);
        },
    },
    beforeMount(){
        this.getfalldata()
    }
})
app.mount('#fallgenerator')