export enum Collections {
    BRANDON_PAYNE = 'brandon_payne',
    NIA_ASHAY = 'nia-ashay'
}

const images = [
    {
        id: 'group-photo',
        from: 'facebook',
        src: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t31.18172-8/27355940_406822596407546_6756779795104375644_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=n0h1P6nJEDsAX-drU_R&_nc_ht=scontent-lhr8-2.xx&oh=00_AT97RwI7B1Lrr2Ch6xV08zIsUGwTCtU6Hy992T_hYOu-_g&oe=633F79A6'
    },
    {
        id: 'wtf-finger',
        src: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t31.18172-8/18121156_296772620745878_8757362535658503229_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=0ITxiYNoXMUAX9ksA7N&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-rOMDthjJi0os0ZGZPAAM7W_eqxMQHkR16b2nIwCDjtQ&oe=633F0B14',
        from: 'facebook'
    },
    {
        id: 'woman-at-loud-gallery',
        src: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/69606159_745504779205991_3054146257728569344_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=2NBQ3FWBLEgAX_nhW-G&_nc_ht=scontent-lhr8-2.xx&oh=00_AT9F2fbFjdPw3PPGXiCN_4gkbRtXaI6osL-F5QUbMUw-vQ&oe=633C3046',
        from: 'facebook'
    },
    {
        id: 'nude-lady-at-loud-gallery',
        from: 'facebook',
        src: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/69388450_745504725872663_3302980874559029248_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=hGHtOM4BvJMAX8KQkkS&_nc_ht=scontent-lhr8-2.xx&oh=00_AT-PP4foNWRSCUnNOv1uwMcQmasLDtYgTftFf3iKBPyByw&oe=633C9015'
    },
    {
        id: 'nia-ashay-speaks-hippie',
        src: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/277585246_1426745717748557_5819081321870699081_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=C2H5DLyTAzwAX8X_g-I&_nc_ht=scontent-lhr8-1.xx&oh=00_AT89mUR3K6-Xlg7DLK6jrPuRQIz2zFg0A-fDMsmLwueflA&oe=631C8535',
        from: 'facebook'
    },
    {
        id: 'woman-sings-black',
        src: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/277773480_1426747371081725_1545106300100321592_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=_vcf82-vzaEAX-g0HRF&tn=4LDjFjX8pPdl-T2_&_nc_ht=scontent-lhr8-2.xx&oh=00_AT-qNNv2QpKSa3_cmAT60POWpaz1u7G31SyN8dG-PIL6UA&oe=631BF31D',
        from: 'facebook'
    },
    {
        id: 'man-raps-photo-by-d',
        src: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/277733795_1426744444415351_146257608858182530_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=__2-nilXTBEAX9mCl4Q&tn=4LDjFjX8pPdl-T2_&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8Ga-6ScZGReWA4BaNJAPaQ7_q7qY4tVHuj4izYHbsXlw&oe=631C452F'
    },
    {
        id: 'amen',
        src: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/277671893_1426749901081472_5563598177286957791_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=JD_E7iWC3I8AX_-dX6H&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8rlhHpB7dC5eJuYioHD1oM0tvV640SrsE6fEfZJl35QA&oe=631D8C66'
    },
    {
        id: 'group-crowd',
        src: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/277757948_1426749911081471_3947978586681618644_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=_9doV66MydQAX_F0gR4&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-u9PKwsZLGOFXvyU996lRelXztEJMTtZOSHfOHgsR5Bg&oe=631C5B2F'
    },
    {
        id: 'singer-man',
        src: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/277772535_1426754964414299_7699102423207562608_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Lef-sckPV0kAX-9nYNI&_nc_ht=scontent-lhr8-2.xx&oh=00_AT8aNGcfVyA0TtR3DhbrNrFqbzAYUgPqEXEzAuMCesthRA&oe=631C2E5D'
    },
    {
        id: 'guitarist-vibes',
        src: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/277775041_1426748824414913_2829996063940886048_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=--VtRVWCT3QAX-Xn1xs&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-_YVeiirLGEIcAdml-pbuy_xcOKC-XGdvTS89sNK35sQ&oe=631DB379'
    },
    {
        id: 'pounce-em',
        src: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/277741107_1426747757748353_2889737569130073114_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=0ucBVCZKm9oAX_XObg8&_nc_ht=scontent-lhr8-2.xx&oh=00_AT-6OrHf-6K8NQjI3Vg9w9twDfN2UlOcs9G4rmAvAS30Sg&oe=631DA9A5'
    },
    {
        id: 'brandon-tux',
        src: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/279752328_5523513067658829_6179408988740945140_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pg3rNX6_Ys0AX-DdC0D&_nc_ht=scontent-ord5-1.xx&oh=00_AT-SnnImal3A7UoBK4T1j5pSVqjP3JA9FaCj4QrkBAEZPg&oe=631E8E85',
        collection: 'brandon-payne'
    },
    {
        id: 'bradon-side',
        src: 'https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/120032638_3723809597629194_8535491474030731126_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=V1B8fJhUQZIAX-iErdS&_nc_ht=scontent-ord5-1.xx&oh=00_AT-X0v4K7tz9ipUfxKNBVhoMYmbv2Ls8NUpx3vznoBnEyA&oe=6340BCFE',
        collection: 'brandon-payne'
    },
    {
        id: 'brandon-2',
        src: 'https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/117445264_3606461009364054_6715325401420484803_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DsYqFUK06XUAX-lT_rO&_nc_ht=scontent-ord5-1.xx&oh=00_AT-Msfo8eFG4xRflljMY-9UMU9Npi6fWOOn9P6Twj5drgg&oe=633E6241',
        collection: 'brandon-payne'
    },
    {
        id: 'nia-ashay-dress',
        src: 'https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/88331205_3148269408528669_3020634981559959552_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=FzMkU_kXja4AX8-cZgT&_nc_ht=scontent-ord5-1.xx&oh=00_AT8wa6F3qX4I-f4h-Am4_RvoLPZoz6HCSbVr206tJwH9Yg&oe=634145F9',
        collection: 'nia-ashay'
    },
    {
        id: 'nia-ashay-2',
        src: 'https://scontent-ord5-1.xx.fbcdn.net/v/t1.18169-9/24131066_1809870669035223_1024262361504824702_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=u_k1duUo7xcAX8BMXKU&_nc_ht=scontent-ord5-1.xx&oh=00_AT-Q8dXEtqbQ2VKAjw-2Fr_lLzWLbodfJ_LIljUW2lmvmA&oe=63413F90',
        collection: 'nia-ashay'
    },
    {
        id: 'nia-ashay-3',
        src: 'https://scontent-ord5-1.xx.fbcdn.net/v/t1.18169-9/12928298_1204951236193839_3893562001385662498_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=v2jdFPefUqQAX-sPTh-&tn=4LDjFjX8pPdl-T2_&_nc_ht=scontent-ord5-1.xx&oh=00_AT810O1qOs-8P7114yEasZNK-BsbvdnHt_bbXoL2RMahKw&oe=6341345C',
        collection: 'nia-ashay'
    },
    {
        id: 'nia-ashay-4',
        src: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/242924660_4741670892521838_562015159772743821_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=zO-uziMVt8sAX_g0Z9F&tn=4LDjFjX8pPdl-T2_&_nc_ht=scontent-ord5-1.xx&oh=00_AT9mpChCQiAxbVrjUyTZD_bOh0Ld98K5SnaGPXGzaofSkg&oe=631FF226',
        collection: 'nia-ashay'
    },
    {
        id: 'nia-ashay-5',
        src: 'https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/42218071_2183603041661982_8002022219934859264_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=R14t8tLjY7UAX_EewQa&tn=4LDjFjX8pPdl-T2_&_nc_ht=scontent-ord5-1.xx&oh=00_AT-Rq4ZmYROJOWpPUj_POWM4wRiO0zTyQNUhGH0JtlTilQ&oe=633FE4FA',
        collection: 'nia-ashay'
    }
]
export default images