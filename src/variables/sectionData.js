import trackPeriodImg from '../assets/img/4352299 1.png'
import consultImg from '../assets/img/usman-yousaf-MP9W9DtdoBI-unsplash 2.png'
import wellnessImg from '../assets/img/pexels-karolina-grabowska-4041391.png'
import personalizeImg from '../assets/img/Untitled-2 3.png'
import img193 from '../assets/img/Rectangle 193.png'
import img194 from '../assets/img/Rectangle 194.png'
import img197 from '../assets/img/Rectangle 197.png'
import img198 from '../assets/img/Rectangle 198.png'

export const sectionData = {
    wellness: {
        primaryHeader: 'Shop our self-care products',
        secondaryHeader: 'Liberate your everyday wellness',
        content: [
            'Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.'
        ],
        buttonTitle: 'Upgrade your self-care',
        buttonIcon: false,
        tertiaryheader: '#NoNasties, we promise!',
        imgTop: false,
        img: [
            wellnessImg
        ]
    },

    mood: {
        primaryHeader: 'Track your mood',
        content: [
            'All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day.'
        ],
        buttonTitle: 'Track you mood on the app',
        buttonIcon: false,
        imgTop: false,
        img:[
            img193,
            img194,
            img197,
            img198,
        ]
    },

    trackPeriod: {
        primaryHeader: 'Track your period',
        content: [
            'Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data.'
        ],
        buttonTitle: 'Track you period on the app',
        buttonIcon: false,
        imgTop: false,
        img: [
            trackPeriodImg
        ] 
    },

    consult: {
        primaryHeader: 'Consult with wellness experts',
        content : [
            'Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you.'
        ],
        buttonTitle: 'Get a consultation',
        buttonIcon: false,
        imgTop: false,
        img: [
            consultImg
        ]
    },

    personalize: {
        primaryHeader: 'Get your personalized period box',
        content: [
            'Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app.'
        ],
        buttonTitle: 'Create your box on the app',
        buttonIcon: true,
        imgTop: true,
        img: [
            personalizeImg
        ]
    },

    footer: {
        links: [
            {
                title: 'Products',
                link: '/'
            },
            {
                title: 'Pour science',
                link: '/'
            },
            {
                title: 'Vision & mission',
                link: '/'
            },
            {
                title: 'About us',
                link: '/'
            },
        ]
    }
}