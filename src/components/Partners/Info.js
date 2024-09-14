import partnerBanner from '../../assets/pulse-banner.png'
import partnerBannerTwo from '../../assets/partner-two-banner.png'
import partnerBannerThree from '../../assets/2nd-banner.png'
const partnersInfo = [
    {
        id: 1,
        logo: 'https://pulseai.info/wp-content/uploads/2024/03/IMG_20240320_233248_685.png',
        banner: partnerBanner,
        title: 'PulseAI',
        about: 'Pulse AI is the very first Premier AI-driven health report generator on Telegram, emphasizing user privacy with encrypted PDF health reports. Along with initial health assessments it also identifies latent diseases like diabetes with predictive modeling. Bot also does Advanced disease identification and medication recommendation systems for quick healthcare support. Generate your Medical Report now!',
        features: [
            'Al-Driven Encrypted Personlized Health Reports',
            'Disease Diagnosis and Medication',
            'Nutri-Al and Trainer-Al',
            'Calorie-Al: Al-Powered Calorie Calculator'
        ],
        links: {
            "website": "https://pulseai.info/",
            "docs": "https://docs.pulseai.info/",
            "twitter": "https://x.com/PulseAIERC?s=09",
            "chart": "https://www.dextools.io/app/en/ether/pair-explorer/0x6bf5ee721b564ef70662be94af82e0c73f09087a?t=1711273890819",
            "telegram": "https://t.me/PulseAIERC",
            "bot": "https://t.me/pulseaiercbot",
            "linktree": "https://linktr.ee/PulseAIERC",
            "medium": "https://medium.com/@PulseAIERC",
            "uniswap_buy": "https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0xdc7d16b1e7c54f35a67af95d5a6eecaec27b2a62"
        },
        how_it_works: null
    },
    {
        id: 2,
        logo: 'https://static.wixstatic.com/media/178e5c_e70fbdf586fb4d1bab3f8b2fa64e7704~mv2.png/v1/fill/w_900,h_900,al_c,q_90,enc_auto/bribeaisnipecircle.png',
        banner: partnerBannerTwo,
        title: 'Bribe AI',
        about: 'BribeAi is focusing on transforming crypto sniping for beginners and experts alike. We provide essential guidance through comprehensive statistical data allowing you to be sufficiently informed on what tip is optimal for your current sniping event. Our platform analyzes various factors like hype and previous launches to suggest optimal tipping amounts, ensuring efficiency in the competitive sniping landscape. Information asymmetry is the reason why many snipers continue to be profitable and BribeAi is here to use it to your advantage.',
        features: null,
        links: {
            "website": "https://www.bribeai.com/",
            "docs": "https://docs.bribeai.com/",
            "twitter": "https://x.com/bribeai",
            "telegram": "https://t.me/bribeaibot",
            "community": "https://t.me/bribeai_new",
        },
        how_it_works: [
            "Access @BribeAI Bot",
            "Select the mode you want to use",
            "Paste the CA you want to analyze",
            "Select the number of buys to be analyzed",
            "Enjoy your results"
        ]
    },
    {
        id: 3,
        logo: 'https://neuralbyte.net/img/Aixible.png',
        banner: partnerBannerThree,
        title: 'NeuralByte',
        about: 'NeuralByte aims to address these challenges by introducing a decentralized solution built on the Ethereum blockchain. By tokenizing computing resources and providing a user-friendly platform for accessing them, NeuralByte democratizes AI processing, making it accessible to a broader audience.',
        features: [
            'AI Training Model',
            'Decentralized Resource Pool',
            'Competitive Pricing Model',
            'Elimination of GPU and TPU Dependency',
            'Built-in Library for AI Development'
        ],
        links: {
            "website": "https://neuralbyte.net/",
            "twitter": "https://twitter.com/neuralbyteerc",
            "telegram": "https://t.me/neuralbyteERC",
            "medium": "https://medium.com/@neuralbyteerc",
            "whitepaper": "https://neuralbyte.gitbook.io/neuralbyte-erc/"
        }
    }
]


export const getPartnerInfo = (index) => {
    return partnersInfo[index]
}