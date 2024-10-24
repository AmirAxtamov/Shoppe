import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('counter', () => {

    const blogs = ref([
        {
            id: 1,
            mainImg: '',
            categories: ["Fashion", 'Style'],
            date: 'October 8 2021',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... ',
            writter: 'Anna Johnson',
            blogInside: `<div></div>`,
            comments: [
                {
                    name: 'Scarelt',
                    date: '6 May 2013',
                    comment: 'lorem ipsum',
                    reply: [
                        {
                            name: 'Scarelt',
                            date: '6 May 2013',
                            comment: 'lorem ipsum',
                            reply:[{}],
                        }
                    ]
                }
            ]
        }
    ])

    return { blogs }
})
