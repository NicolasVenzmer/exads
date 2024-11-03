import TheGrayMan from "./assets/images/TheGrayMan_Thumbnail.png";
import Blonde from "./assets/images/Blonde_Thumbnail.png";
import Minions from "./assets/images/Minions_Thumbnail.png";
import Batman from "./assets/images/Batman_Thumbnail.png";
import TheFlash from "./assets/images/Flash_Thumbnail.png";
import TopGun from "./assets/images/TopGun_Thumbnail.png";
import Thor from "./assets/images/Thor_Thumbnail.png";
import SpiderMan from "./assets/images/SpiderMan_Thumbnail.png";
import BulletTrain from "./assets/images/BulletTrain_Thumbnail.png";

export const data =
    {
        questions: ["Choose one of the three movies",
            "Which one do you like the most?",
            "Which one do you want to watch now?"],
        options: [
            {
                id: 1,
                title: "The Gray Man",
                image: TheGrayMan,
                imdb: "https://www.imdb.com/title/tt1649418/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520gray%2520man",
                nextOptions: [4,5,6]
            },
            {
                id:2,
                title: "Blonde",
                image: Blonde,
                imdb: "https://www.imdb.com/title/tt1655389/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_blonde",
                nextOptions: [8, 9, 7]
            },
            {
                id:3,
                title: "Minions: The Rise of Gru",
                image: Minions,
                imdb: "https://www.imdb.com/title/tt5113044/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_minions",
                nextOptions: [4, 5, 6]
            },
            {
                id:4,
                title: "Top Gun: Maverick",
                image: TopGun,
                imdb: "https://www.imdb.com/title/tt1745960/?ref_=nv_sr_srsg_0_tt_6_nm_0_in_0_q_top%2520gun%2520mav",
                nextOptions: [5, 6, 7]
            },
            {
                id:5,
                title: "Bullet Train",
                image: BulletTrain,
                imdb: "https://www.imdb.com/title/tt12593682/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_bullet%2520train",
                nextOptions: [4,6,7]
            },
            {
                id:6,
                title: "Thor: Love and Thunder",
                image: Thor,
                imdb: "https://www.imdb.com/title/tt10648342/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_thor%2520love%2520",
                nextOptions: [1,2,3]
            },
            {
                id:7,
                title: "The Batman",
                image: Batman,
                imdb: "https://www.imdb.com/title/tt1877830/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520batman",
                nextOptions: [8, 9, 3]
            },
            {
                id:8,
                title: "SpiderMan: No Way Home",
                image: SpiderMan,
                imdb: "https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_1_tt_8_nm_0_in_0_q_spiderman%2520no%2520way",
                nextOptions: [9,7,6]
            },
            {
                id:9,
                title: "The Flash",
                image: TheFlash,
                imdb: "https://www.imdb.com/title/tt3107288/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520flash",
                nextOptions: [4, 5, 6]
            },
        ],
    }
