const searchInput = document.getElementById('searchInput');
const dropdownMenu = document.getElementById('dropdown');
const options = [
    { text: 'AutoCAD基础版2025', url: 'https://pan.xunlei.com/s/VNu7qlru5tdnsn5xrG6I5HGJA1?pwd=3sc6#' },
    { text: 'AutoCAD基础版2024', url: 'https://pan.xunlei.com/s/VNtV42mF_8L9n5Entx5XCodkA1?pwd=qt52#' },
    { text: 'AutoCAD基础版2023', url: 'https://pan.quark.cn/s/7e060a6903d1' },
    { text: 'AutoCAD基础版2022', url: 'https://pan.quark.cn/s/b00bc5ca35e6 ' },
    { text: 'AutoCAD基础版2021', url: 'https://pan.quark.cn/s/996b11bdf821' },
    { text: 'AutoCAD基础版2020', url: 'https://pan.xunlei.com/s/VO0RpQwRQe-yYvQNSDl7xdKqA1?pwd=j9wh#' },
    { text: 'AutoCAD基础版2019', url: 'https://pan.quark.cn/s/3ddca39dd9c3' },
    { text: 'AutoCAD基础版2018', url: 'https://pan.quark.cn/s/ac73360fd622' },
    { text: 'AutoCAD基础版2017', url: 'https://pan.quark.cn/s/bd0d8e461d87' },
    { text: 'AutoCAD基础版2016', url: 'https://pan.quark.cn/s/30e35f3d8cbe' },
    { text: 'AutoCAD基础版2015', url: 'https://pan.quark.cn/s/2fe78d760be9' },
    { text: 'AutoCAD基础版2014', url: 'https://pan.quark.cn/s/f40a6d705de4' },
    { text: 'AutoCAD基础版2013', url: 'https://pan.quark.cn/s/4188f326bd2c' },
    { text: 'AutoCAD基础版2012', url: 'https://pan.quark.cn/s/27de93697b3b' },
    { text: 'AutoCAD基础版2011', url: 'https://pan.quark.cn/s/3c2866ceeba9' },
    { text: 'AutoCAD基础版2010', url: 'https://pan.quark.cn/s/ee71df4b49d2 ' },
    { text: 'AutoCAD基础版2009', url: 'https://pan.xunlei.com/s/VNrhVN6sA2NqQj_27p2MHNWAA1?pwd=arxp#' },
    { text: 'AutoCAD基础版2008', url: 'https://pan.xunlei.com/s/VNrhVXeOegQygyU-FrNvUdRVA1?pwd=mvej#' },
    { text: 'AutoCAD基础版2007', url: 'https://pan.xunlei.com/s/VNrhVc7Qm2rh7FA0tUrcz3GcA1?pwd=txjv#' },
    { text: 'AutoCAD基础版2006', url: 'https://pan.xunlei.com/s/VNrhVh6vVlUcwyxa0ITM65JNA1?pwd=u5ng#' },
    { text: 'AutoCAD基础版2005', url: 'https://pan.xunlei.com/s/VNrhVlIGFaELj35X2uDB0bqYA1?pwd=iy33#' },
    { text: 'AutoCAD基础版2004', url: 'https://pan.xunlei.com/s/VNrhVq9gZXk0dNphYJqBG_Q7A1?pwd=me9c#' },
    { text: 'Photoshop（ps）2024 25.11', url: 'https://pan.xunlei.com/s/VO2e8FbjU6fLVr3q7qOLEqAyA1?pwd=mzqv#' },
    { text: 'Photoshop（ps）2024 25.9.1', url: 'https://pan.xunlei.com/s/VO2YZk6F9t2RuAvHxLknZ6LwA1?pwd=nbme#' },
    { text: 'Photoshop（ps）2024 25.9', url: 'https://pan.xunlei.com/s/VNy_XYeXZ2GgWxPqWCD2T0oqA1?pwd=x59p#' },
    { text: 'Photoshop（ps）2024 25.8', url: 'https://pan.xunlei.com/s/VNvgvx1y6108qG8w-hL3gl2pA1?pwd=629g#' },
    { text: 'Photoshop（ps）2024 25.7', url: 'https://pan.xunlei.com/s/VNxSwTvbHH_JIXzfSWOqH6M4A1?pwd=sx9n#' },
    { text: 'Photoshop（ps）2024 25.6', url: 'https://pan.xunlei.com/s/VNt1XsKB6-b6S75iVBIX4TraA1?pwd=3kur#' },
    { text: 'Photoshop（ps）2024', url: 'https://pan.xunlei.com/s/VNtV4537bKFO6WXQ0riFUqqMA1?pwd=36fd#' },
    { text: 'Photoshop（ps）2023', url: 'https://pan.quark.cn/s/f4599a1c6626' },
    { text: 'Photoshop（ps）2022', url: 'https://pan.quark.cn/s/124f058f60c6' },
    { text: 'Photoshop（ps）2021', url: 'https://pan.quark.cn/s/539d9acbf1f9' },
    { text: 'Photoshop（ps）2020', url: 'https://pan.quark.cn/s/adc7be63eea8' },
    { text: 'Photoshop（ps）2019', url: 'https://pan.quark.cn/s/542319b7fd62' },
    { text: 'Photoshop（ps）2018', url: 'https://pan.quark.cn/s/23d9b1c2a207' },
    { text: 'Photoshop（ps）2017', url: 'https://pan.quark.cn/s/5a8dca8af95f' },
    { text: 'Photoshop（ps）CS6', url: 'https://pan.quark.cn/s/d6c76fbf8c17' },
    { text: 'Premiere 2024 24.4.1', url: 'https://pan.xunlei.com/s/VNzKEIqjTZFwhtNgFMYetYjhA1?pwd=7q4j#' },
    { text: 'Premiere 2024', url: 'https://pan.quark.cn/s/8e64341b3ab7' },
    { text: 'Premiere 2023', url: 'https://pan.quark.cn/s/4e6fbee0c052' },
    { text: 'Premiere 2022', url: 'https://pan.quark.cn/s/e11007fd2cd6' },
    { text: 'Premiere 2021', url: 'https://pan.quark.cn/s/0f6c94456d5e' },
    { text: 'Premiere 2020', url: 'https://pan.quark.cn/s/2ec638aad2d8' },
    { text: 'Premiere 2019', url: 'https://pan.quark.cn/s/6cbfe0d57f4f' },
    { text: 'Premiere 2018', url: 'https://pan.quark.cn/s/30e057555c4b' },
    { text: 'Premiere 2017', url: 'https://pan.quark.cn/s/9e3efe4171d7' },
    { text: 'Acrobat 2024', url: 'https://pan.xunlei.com/s/VNudty76y7mUgXwCAKKdh-aGA1?pwd=mpzc#' },
    { text: 'Acrobat 2023', url: 'https://pan.quark.cn/s/c5f96f89536a' },
    { text: 'Acrobat 2022', url: 'https://pan.quark.cn/s/c8385af96b53' },
    { text: 'Acrobat 2021', url: 'https://pan.quark.cn/s/9fff704a0d46' },
    { text: 'Acrobat 2020', url: 'https://pan.quark.cn/s/84776123cde7' },
    { text: 'After Effects（AE）mac版本', url: 'https://pan.xunlei.com/s/VNv2sxSr_ful0c70H6WGRj4GA1?pwd=kcdg#' },
    { text: 'After Effects（AE）2024', url: 'https://pan.quark.cn/s/bebbfc5ec849' },
    { text: 'After Effects（AE）2023', url: 'https://pan.quark.cn/s/65a994f6e7f3' },
    { text: 'After Effects（AE）2022', url: 'https://pan.quark.cn/s/c82fc7d16e3d' },
    { text: 'After Effects（AE）2021', url: 'https://pan.quark.cn/s/ce6ea8fbcfaf' },
    { text: 'After Effects（AE）2020', url: 'https://pan.quark.cn/s/18e479093aec' },
    { text: 'After Effects（AE）2018', url: 'https://pan.quark.cn/s/384465374427' },
    { text: 'After Effects（AE）2017', url: 'https://pan.quark.cn/s/c5e2b79b8bd7' },
    { text: 'Animate（AN）mac版本', url: 'https://pan.xunlei.com/s/VNvN0RZQ7WsRmhZv4Jgb6ZXOA1?pwd=ukt6#' },
    { text: 'Animate（AN）2024', url: 'https://pan.quark.cn/s/de5ef2f437f2' },
    { text: 'Animate（AN）2023', url: 'https://pan.quark.cn/s/59d2a8a10c6c' },
    { text: 'Animate（AN）2022', url: 'https://pan.quark.cn/s/34abf3eb109e' },
    { text: 'Animate（AN）2021', url: 'https://pan.quark.cn/s/feafb612ef6a' },
    { text: 'Animate（AN）2020', url: 'https://pan.quark.cn/s/ed76ed27a7ab' },
    { text: 'Animate（AN）2019', url: 'https://pan.quark.cn/s/b47a1e86e793' },
    { text: 'Animate（AN）2018', url: 'https://pan.quark.cn/s/5c779a335334' },
    { text: 'Animate（AN）2017', url: 'https://pan.quark.cn/s/0734474435bc' },
    { text: 'Audition（AU）mac版本', url: 'https://pan.xunlei.com/s/VNv2t5oW_ful0c70H6WGRl04A1?pwd=jtdq#' },
    { text: 'Audition（AU）2024', url: 'https://pan.quark.cn/s/5743d2e132d9' },
    { text: 'Audition（AU）2023', url: 'https://pan.quark.cn/s/5c9e8f5d452a' },
    { text: 'Audition（AU）2022', url: 'https://pan.quark.cn/s/a94fa9a997a6' },
    { text: 'Audition（AU）2021', url: 'https://pan.quark.cn/s/aa590c0f7dda' },
    { text: 'Audition（AU）2020', url: 'https://pan.quark.cn/s/a1097c113aca' },
    { text: 'Audition（AU）2019', url: 'https://pan.quark.cn/s/64e2ed31e51a' },
    { text: 'Audition（AU）2018', url: 'https://pan.quark.cn/s/233ea2bc4932' },
    { text: 'Audition（AU）2017', url: 'https://pan.quark.cn/s/5693952597a8' },
    { text: 'Bridge（AU）mac版本', url: 'https://pan.xunlei.com/s/VNvN0aBQHo_31ZTIr5m5qmcbA1?pwd=v35w#' },
    { text: 'Bridge（AU）2024', url: 'https://pan.quark.cn/s/fc6a4c4309b6' },
    { text: 'Bridge（AU）2023', url: 'https://pan.xunlei.com/s/VNrA2XQ-x_OMm-fl9LiJME2JA1?pwd=zqtu#' },
    { text: 'Bridge（AU）2022', url: 'https://pan.xunlei.com/s/VNrA2as-NDMcd-r1o-0nceJVA1?pwd=mtvm#' },
    { text: 'Bridge（AU）2021', url: 'https://pan.xunlei.com/s/VNrA2etV4ASlDvG20ze1H09TA1?pwd=g34d#' },
    { text: 'Bridge（AU）2020', url: 'https://pan.xunlei.com/s/VNrA2ijXghJbhICaO3ci4qq_A1?pwd=vej2#' },
    { text: 'Bridge（AU）2019', url: 'https://pan.xunlei.com/s/VNrA2n3rpGD74swbLS8yR-pwA1?pwd=njs3#' },
    { text: 'Bridge（AU）2018', url: 'https://pan.xunlei.com/s/VNrA2r79x_OMm-fl9LiJMNTEA1?pwd=cfdn#' },
    { text: 'Bridge（AU）2017', url: 'https://pan.xunlei.com/s/VNrA2u6X2RaPyZzgSGKwI0VsA1?pwd=t4u4#' },
    { text: 'Dimension 2022', url: 'https://pan.xunlei.com/s/VNrA33SsYPeEr0uvig__TDpiA1?pwd=mf7v#' },
    { text: 'Dimension 2021', url: 'https://pan.quark.cn/s/5b6441e09c24' },
    { text: 'Dimension 2020', url: 'https://pan.xunlei.com/s/VNrA37VgC3DWufWRhvGfjyF6A1?pwd=bgh6#' },
    { text: 'Dimension 2019', url: 'https://pan.xunlei.com/s/VNrA3BLE42v7UYp4Dc8xC8-uA1?pwd=b2en#' },
    { text: 'Dreamweaver 2021', url: 'https://pan.quark.cn/s/5243fe6e7e44' },
    { text: 'Dreamweaver 2020', url: 'https://pan.quark.cn/s/c87dfe750c0e' },
    { text: 'Dreamweaver 2019', url: 'https://pan.quark.cn/s/9a0cccbcd934' },
    { text: 'Dreamweaver 2018', url: 'https://pan.quark.cn/s/1b848f181f8f' },
    { text: 'Dreamweaver 2017', url: 'https://pan.quark.cn/s/68c7029198a6' },
    { text: 'illustrator（AI）mac版本', url: 'https://pan.xunlei.com/s/VNv2tFleWe2duGBSRDnfBNElA1?pwd=4jdj#' },
    { text: 'illustrator（AI）2024', url: 'https://pan.quark.cn/s/42eea2b2364f' },
    { text: 'illustrator（AI）2023', url: 'https://pan.quark.cn/s/bb586c82d16e' },
    { text: 'illustrator（AI）2022', url: 'https://pan.quark.cn/s/82ce1bc05911' },
    { text: 'illustrator（AI）2021', url: 'https://pan.quark.cn/s/fd965876cafc' },
    { text: 'illustrator（AI）2020', url: 'https://pan.quark.cn/s/9ad43516c796' },
    { text: 'illustrator（AI）2019', url: 'https://pan.quark.cn/s/dd0ff51bb6c2' },
    { text: 'illustrator（AI）2018', url: 'https://pan.quark.cn/s/83f88d409ce5' },
    { text: 'illustrator（AI）2017', url: 'https://pan.quark.cn/s/adc757ebcdc2' },
    { text: 'illustrator（AI）2015', url: 'https://pan.quark.cn/s/340a7ce2c7f7' },
    { text: 'illustrator（AI）CS6', url: 'https://pan.quark.cn/s/2d4ee0c52634' },
    { text: 'illustrator（AI）CS5', url: 'https://pan.quark.cn/s/7e081956a5ae' },
    { text: 'illustrator（AI）CS5', url: 'https://pan.quark.cn/s/7e081956a5ae' },
    { text: 'InCopy（IC）mac版本', url: 'https://pan.xunlei.com/s/VNvN0oox0_dT43mM0F5fZ3nrA1?pwd=y42c#' },
    { text: 'InCopy（IC）2024', url: 'https://pan.quark.cn/s/b251599d9655' },
    { text: 'InCopy（IC）2023', url: 'https://pan.xunlei.com/s/VNrA2-lWtV9EuPjkiovp3WGPA1?pwd=ppie#' },
    { text: 'InCopy（IC）2022', url: 'https://pan.xunlei.com/s/VNrA23qENDMcd-r1o-0ncSXAA1?pwd=zggw#' },
    { text: 'InCopy（IC）2021', url: 'https://pan.xunlei.com/s/VNrA27oCjjWNT9I7jDBp7Q6VA1?pwd=rwzz#' },
    { text: 'InCopy（IC）2020', url: 'https://pan.xunlei.com/s/VNrA2C9EghJbhICaO3ci4dcKA1?pwd=7jsq#' },
    { text: 'InCopy（IC）2019', url: 'https://pan.xunlei.com/s/VNrA2GJGx_OMm-fl9LiJM6ITA1?pwd=a68j#' },
    { text: 'InCopy（IC）2018', url: 'https://pan.xunlei.com/s/VNrA2LrRp3eAVA2V9Cz7M-9aA1?pwd=j4pu#' },
    { text: 'InCopy（IC）2017', url: 'https://pan.xunlei.com/s/VNrA2Q5lvL8SUVLN2RduQuxTA1?pwd=72v7#' },
    { text: 'InDesign（ID）mac版本', url: 'https://pan.xunlei.com/s/VNvN4RiU9P-CiJX9JiixVKggA1?pwd=3k85#' },
    { text: 'InDesign（ID）2024', url: 'https://pan.quark.cn/s/0a7dee88a8ca' },
    { text: 'InDesign（ID）2023', url: 'https://pan.xunlei.com/s/VNrA1Sgm8Uwryk4gFTfQC3DYA1?pwd=hcac#' },
    { text: 'InDesign（ID）2022', url: 'https://pan.xunlei.com/s/VNrA1WSepGD74swbLS8yQWpGA1?pwd=k24t#' },
    { text: 'InDesign（ID）2021', url: 'https://pan.xunlei.com/s/VNrA1_ivvL8SUVLN2RduQb8zA1?pwd=6s27#' },
    { text: 'InDesign（ID）2020', url: 'https://pan.xunlei.com/s/VNrA1eN7LJHDpCKMnC4wQq_xA1?pwd=2ya6#' },
    { text: 'InDesign（ID）2019', url: 'https://pan.xunlei.com/s/VNrA1j1gjjWNT9I7jDBp76f7A1?pwd=5j2i#' },
    { text: 'InDesign（ID）2018', url: 'https://pan.xunlei.com/s/VNrA1ng7oXh0FhgZXKSMK9MlA1?pwd=m6an#' },
    { text: 'InDesign（ID）2017', url: 'https://pan.xunlei.com/s/VNrA1rgp42v7UYp4Dc8xBUJnA1?pwd=wy6t#' },
    { text: 'Lightroom Classic（LRC）mac版本', url: 'https://pan.xunlei.com/s/VNv2t_5z6PXH7aJ35c7OxQk1A1?pwd=wn5j#' },
    { text: 'Lightroom Classic（LRC）手机版', url: 'https://pan.quark.cn/s/6a0662d41aeb' },
    { text: 'Lightroom Classic（LRC）2024 13.4', url: 'https://pan.xunlei.com/s/VO2Y_fknSgCaigdmSlv94MkDA1?pwd=zd38#' },
    { text: 'Lightroom Classic（LRC）2024', url: 'https://pan.xunlei.com/s/VNtV4-0FuW16lvT7afc5PxKhA1?pwd=k4yu#' },
    { text: 'Lightroom Classic（LRC）2023', url: 'https://pan.quark.cn/s/18a3bab7b822' },
    { text: 'Lightroom Classic（LRC）2022', url: 'https://pan.quark.cn/s/4e92a5651291' },
    { text: 'Lightroom Classic（LRC）2021', url: 'https://pan.quark.cn/s/a0f735cb9efb' },
    { text: 'Lightroom Classic（LRC）2020', url: 'https://pan.quark.cn/s/f55701bf6f72' },
    { text: 'Lightroom Classic（LRC）2019', url: 'https://pan.quark.cn/s/98a918d77926' },
    { text: 'Lightroom Classic（LRC）2018', url: 'https://pan.quark.cn/s/e20007607a2d' },
    { text: 'Lightroom Classic（LRC）6.4', url: 'https://pan.quark.cn/s/199b8b1809fb' },
    { text: 'prelude 2022', url: 'https://pan.xunlei.com/s/VNo6I8Oz890L2P7eCUhh7ELYA1?pwd=66ht' },
    { text: 'prelude 2021', url: 'https://pan.xunlei.com/s/VNo6Ic6YSZ1qKc9jfcMrxZIEA1?pwd=5kcu' },
    { text: 'prelude 2020', url: 'https://pan.xunlei.com/s/VNo6IhYcXdonbUcTnYCdzMZxA1?pwd=pir7' },
    { text: 'prelude 2019', url: 'https://pan.xunlei.com/s/VNo6InHAi7Wtop60ZlxqUj3JA1?pwd=xr8j' },
    { text: 'Media Encoder（ME）mac版本', url: 'https://pan.xunlei.com/s/VNvN4f_RR2sKcs1bT85L5DzuA1?pwd=ar8j#' },
    { text: 'Media Encoder（ME）2024', url: 'https://pan.xunlei.com/s/VNsqpyQLCKu60bdbzIOpTOw1A1?pwd=6ii9#' },
    { text: 'Media Encoder（ME）2023', url: 'https://pan.xunlei.com/s/VNo6MSaOoJyL_PRv1h2YpY-8A1?pwd=6w2z' },
    { text: 'Media Encoder（ME）2022', url: 'https://pan.xunlei.com/s/VNo6MXP3kJGzNnL4bZ3GVaxvA1?pwd=e3n4' },
    { text: 'Media Encoder（ME）2021', url: 'https://pan.xunlei.com/s/VNo6MbJ3z5fbpiLvCkYmFyNdA1?pwd=caff' },
    { text: 'Media Encoder（ME）2020', url: 'https://pan.xunlei.com/s/VNo6MgXBwbqrwdFzLNrMo8yFA1?pwd=rre7' },
    { text: 'Character Animator mac版本', url: 'https://pan.xunlei.com/s/VNvN4p770_dT43mM0F5f_S7NA1?pwd=csyr#' },
    { text: 'Character Animator 2024', url: 'https://pan.xunlei.com/s/VNo6NWnoyyhzSlT13cCYGVWeA1?pwd=gayx' },
    { text: 'Character Animator 2023', url: 'https://pan.xunlei.com/s/VNo7EBC79jdW7ZxaKkVY98TMA1?pwd=hc5q' },
    { text: 'Character Animator 2022', url: 'https://pan.xunlei.com/s/VNo7EFrRIOkdLE_7nUs2_lyrA1?pwd=ieg8' },
    { text: 'Character Animator 2021', url: 'https://pan.xunlei.com/s/VNo7EMEF3__r9-0mA81m6D1PA1?pwd=h9uk' },
    { text: 'Character Animator 2020', url: 'https://pan.xunlei.com/s/VNo7ESlbWqvs9ceE_QFzyK5LA1?pwd=f6ae' },
    { text: 'Character Animator 2019', url: 'https://pan.xunlei.com/s/VNo7EY84890L2P7eCUhhJUHLA1?pwd=se37' },
    { text: 'Adobe XD 55.1', url: 'https://pan.xunlei.com/s/VNqaFGeuFJ9XqL05KHqPo0IcA1?pwd=8xgw#' },
    { text: 'Adobe XD 45.0', url: 'https://pan.xunlei.com/s/VNqaSEPNFJ9XqL05KHqPrVRHA1?pwd=er8c#' },
    { text: 'Adobe XD 22.0', url: 'https://pan.xunlei.com/s/VNqaSJPZyqSl9wV3Bcf8lv4RA1?pwd=sn3w#' },

    // ... 其他选项
];

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    if (query.trim() === '') {
        dropdownMenu.innerHTML = '';
        dropdownMenu.style.display = 'none';
        return;
    }
    const filteredOptions = options.filter(option => option.text.toLowerCase().includes(query)).slice(0, 50); // 最多显示5条
    showDropdown(filteredOptions);
});

function showDropdown(options) {
    dropdownMenu.innerHTML = '';
    if (options.length > 0) {
        dropdownMenu.style.display = 'block';
        options.forEach(option => {
            const a = document.createElement('a');
            a.textContent = option.text;
            a.href = '#';
            a.dataset.url = option.url; // 使用data-url属性存储URL
            a.addEventListener('click', function(e) {
                e.preventDefault(); // 阻止默认的链接跳转行为
                const url = this.dataset.url;
                window.location.href = url; // 跳转到对应的URL
                dropdownMenu.innerHTML = '';
                dropdownMenu.style.display = 'none';
            });
            dropdownMenu.appendChild(a);
        });
    } else {
        dropdownMenu.style.display = 'none';
    }
}