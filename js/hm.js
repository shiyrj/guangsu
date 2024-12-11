const searchInput = document.getElementById('searchInput');
const dropdownMenu = document.getElementById('dropdown');
const options = [
    { text: 'Adobe 2024全家桶', url: 'https://pan.xunlei.com/s/VO9ZgMZTZlpVOEv1-7yc6UO0A1?pwd=yi7m#' },
    { text: 'Photoshop 2024 25.11', url: 'https://pan.xunlei.com/s/VO9ZgitZthQJA3jech55lXDkA1?pwd=4r6e#' },
    { text: 'Photoshop 2024', url: 'https://pan.xunlei.com/s/VO9Zh0nwU-HW8ZfEfbRkbBBSA1?pwd=iduy#' },
    { text: 'Premiere 2024 24.4.1', url: 'https://pan.xunlei.com/s/VO9ZhO7yDtSCJ6iviINdKV4_A1?pwd=h3ar#' },
    { text: 'Acrobat DC 2024', url: 'https://pan.xunlei.com/s/VO9ZiNN_F01TBjaOktqmNFTiA1?pwd=35xx#' },
    { text: 'Animate 2024', url: 'https://pan.xunlei.com/s/VOAkyOd2jqhcVWcsT0I1JnGUA1?pwd=m4p8#' },
    { text: 'Dimension 2022', url: 'https://pan.xunlei.com/s/VO9Zj4JFErfnXKUcRfxHVjqqA1?pwd=8x3y#' },
    { text: 'illustrator 2024', url: 'https://pan.xunlei.com/s/VO9ZjMRPFPmj0eAVSspbrh3IA1?pwd=z3bg#' },
    { text: 'Lightroom Classic 2024 13.4', url: 'https://pan.xunlei.com/s/VO9ZjaxWErfnXKUcRfxHVuxTA1?pwd=wabs#' },
    { text: 'Lightroom Classic 2024', url: 'https://pan.xunlei.com/s/VO9Zjs6lKhGzVEfrDVAAA4A6A1?pwd=2rpd#' },
    { text: 'Media Encoder 2024', url: 'https://pan.xunlei.com/s/VO9ZkB6d2HybElvIDsX3hAmIA1?pwd=nwpf#' },
    { text: 'Character Animator 2024', url: 'https://pan.xunlei.com/s/VO9ZkSAk8B4BUbdJOcagdhpuA1?pwd=95n3#' },
    { text: 'Adobe XD 55.1', url: 'https://pan.xunlei.com/s/VO9ZkdAyhASkTUoPEOGzjR_-A1?pwd=mtd8#' },
    { text: 'Substance 3D Designer 2024', url: 'https://pan.xunlei.com/s/VO9Zl9NebtHZv5qrenpU_1uuA1?pwd=x8wd#' },
    { text: 'Substance 3D Painter 2024', url: 'https://pan.xunlei.com/s/VO9Zl9NebtHZv5qrenpU_1uuA1?pwd=x8wd#' },
    { text: 'Substance 3D Sampler', url: 'https://pan.xunlei.com/s/VO9Zl9NebtHZv5qrenpU_1uuA1?pwd=x8wd#' },
    { text: 'multisim 14.3', url: 'https://pan.xunlei.com/s/VO9ZzjmDIVf1vlAt_CntE9hTA1?pwd=xw4b#' },
    { text: 'multisim 14.0', url: 'https://pan.xunlei.com/s/VO9_-0zPF01TBjaOktqmUo5nA1?pwd=bvz7#' },
    { text: 'Proteus 8.17', url: 'https://pan.xunlei.com/s/VO9_0w-DG8c65Fi21y6TLS86A1?pwd=dyff#' },
    { text: 'Altium Designer 24.0', url: 'https://pan.xunlei.com/s/VO9_12IhErfnXKUcRfxHcondA1?pwd=vdc4#' },
    { text: 'IntelliJ IDEA 2024', url: 'https://pan.xunlei.com/s/VO9ZsUzrDidCQ3y_ekkUjA-7A1?pwd=c5i3#' },
    { text: 'CAD 2025', url: 'https://pan.xunlei.com/s/VO9dgogQthQJA3jech57fLzoA1?pwd=qq6j#' },
    { text: 'CAD 2024', url: 'https://pan.xunlei.com/s/VO9dgytF9a6wDH1IiBMtqq3FA1?pwd=xgfm#' },
    { text: '达芬奇 19.0.2', url: 'https://pan.xunlei.com/s/VO9_3U_IhASkTUoPEOGzsCbAA1?pwd=zvnj#' },
    { text: '达芬奇 19', url: 'https://pan.xunlei.com/s/VO9_3ae6DidCQ3y_ekkUpGmSA1?pwd=666d#' },
    { text: 'Navicat 17', url: 'https://pan.xunlei.com/s/VO9ZxZzx9EzSvqi1lfaEtt20A1?pwd=cynv#' },
    { text: 'Navicat 16', url: 'https://pan.xunlei.com/s/VO9ZxgoCSWSh3qLU6yQd9QLxA1?pwd=f2pt#' },
    { text: 'Keil5 C51v960 + MDK525', url: 'https://pan.xunlei.com/s/VO9ZypOiG8c65Fi21y6TJuxjA1?pwd=we9f#' },
    { text: 'Keil uvision5 C51v957', url: 'https://pan.xunlei.com/s/VO9Zyx2EthQJA3jech55t8X5A1?pwd=aphd#' },
    { text: 'JetBrains系列通用破解工具', url: 'https://pan.xunlei.com/s/VO9cy--pthQJA3jech57P5tGA1?pwd=n4v7#' },
    { text: 'IntelliJ pyCharm 2024', url: 'https://pan.xunlei.com/s/VO9d-WR2aud_byiFtdL8RTbJA1?pwd=uc42#' },
    { text: 'IntelliJ webStorm 2024', url: 'https://pan.xunlei.com/s/VO9d0QdG2U5CHm0bECE-VDKiA1?pwd=cnis#' },
    { text: 'IntelliJ phpStorm 2024', url: 'https://pan.xunlei.com/s/VO9d1JYBZlpVOEv1-7ydm7oNA1?pwd=gc4b#' },
    { text: 'IntelliJ CLion 2024', url: 'https://pan.xunlei.com/s/VO9d2eoM4mUlnCa34kEXAJCkA1?pwd=hrtg#' },
    { text: 'IntelliJ DataGrip 2024', url: 'https://pan.xunlei.com/s/VO9d3VZbDidCQ3y_ekkWSdsbA1?pwd=phn3#' },
    { text: 'IntelliJ GoLand 2024', url: 'https://pan.xunlei.com/s/VO9d3rq1DtSCJ6iviINf05dPA1?pwd=kpau#' },
    { text: 'Visual Studio 2022', url: 'https://pan.xunlei.com/s/VO9d5UT5ZlpVOEv1-7ydnqTEA1?pwd=ch8n#' },
    { text: 'Visual Studio Code 2024', url: 'https://pan.xunlei.com/s/VO9d6CXNP7PxCW7AaY_Q6rKxA1?pwd=rc77#' },
    { text: 'Visual Studio Code 2023', url: 'https://pan.xunlei.com/s/VO9d6S5tQ5SHZYrWwzs6ut4QA1?pwd=dzkh#' },
    { text: 'Xshell7安装包与激活码', url: 'https://pan.xunlei.com/s/VO9d7UDgaud_byiFtdL8V-QlA1?pwd=gu57#' },
    { text: 'Typora 1.9.4', url: 'https://pan.xunlei.com/s/VO9d7yCYsWipU1rscykr6-6BA1?pwd=igh3#' },
    { text: 'Eplan Electric 2024', url: 'https://pan.xunlei.com/s/VO9dC1SyQ5SHZYrWwzs6xDRcA1?pwd=n3uh#' },
    { text: 'Eplan Electric 2023', url: 'https://pan.xunlei.com/s/VO9dCH73hQfr33IyBTu11lrvA1?pwd=vm8r#' },
    { text: 'Quartus 18', url: 'https://pan.xunlei.com/s/VO9dD4plF01TBjaOktqo6vnDA1?pwd=8k6r#' },
    { text: 'Proe 5.0M280', url: 'https://pan.xunlei.com/s/VO9dDjhS8B4BUbdJOcaiMacFA1?pwd=qmq3#' },
    { text: 'Dynaform', url: 'https://pan.xunlei.com/s/VO9dEIlhQ5SHZYrWwzs6y3EaA1?pwd=cgd4#' },
    { text: 'Bridge 2024', url: 'https://pan.xunlei.com/s/VO9dFEnuEpgVoEhkymb_XJDcA1?pwd=knis#' },
    { text: 'Audition 2024', url: 'https://pan.xunlei.com/s/VO9dFc-v2U5CHm0bECE-aGSMA1?pwd=8wwr#' },
    { text: 'After Effects 2024', url: 'https://pan.xunlei.com/s/VO9dFw6bdhyT6QWYoVLWPz81A1?pwd=4mdy#' },
    { text: 'Maya 2025', url: 'https://pan.xunlei.com/s/VO9dhgliU-HW8ZfEfbRmXUpfA1?pwd=wu6p#' },
    { text: 'Maya 2024', url: 'https://pan.xunlei.com/s/VO9dhxwg9SirrkKE0X8F49qUA1?pwd=2hsx#' },
    { text: 'Inventor 2025', url: 'https://pan.xunlei.com/s/VO9difSE9a6wDH1IiBMtrUV-A1?pwd=ykpk#' },
    { text: 'Inventor 2024', url: 'https://pan.xunlei.com/s/VO9ditnc2U5CHm0bECE-kPdNA1?pwd=i2s4#' },
    { text: '天正T20 V10.0', url: 'https://pan.xunlei.com/s/VO9djbe8U-HW8ZfEfbRmYFhwA1?pwd=4eze#' },
    { text: 'Origin 2024', url: 'https://pan.xunlei.com/s/VO9dpBHKhQfr33IyBTu1FNRIA1?pwd=3z6d#' },
    { text: 'Project 2024', url: 'https://pan.xunlei.com/s/VO9dm38KK2sDzUrscRFmTWi3A1?pwd=xa2d#' },
    { text: 'Amos 28', url: 'https://pan.xunlei.com/s/VO9dmmlsKhGzVEfrDVAC3gNXA1?pwd=hwep#' },
    { text: 'Stata 18', url: 'https://pan.xunlei.com/s/VO9dnG56xq0e6k0b6yrWF7rfA1?pwd=cskp#' },
    { text: 'Minitab 21', url: 'https://pan.xunlei.com/s/VO9dnkIEgJLExogrdhgW0g7nA1?pwd=g5xg#' },
    { text: 'Mplus 8.7', url: 'https://pan.xunlei.com/s/VO9doGrL2HybElvIDsX5bzBcA1?pwd=z8dc#' },
    { text: 'C4D 2024', url: 'https://pan.xunlei.com/s/VOAl0RmQXWDu4kivZv7m3dpUA1?pwd=tpkc#' },
    { text: 'C4D 2024 5.0', url: 'https://pan.xunlei.com/s/VOAl0lTUIsoxC8LpDURDUfrZA1?pwd=ynci#' },
    { text: '3dmax 2024', url: 'https://pan.xunlei.com/s/VOAl24DO7TZlOOUcRUPpt5S8A1?pwd=357p#' },
    { text: '3dmax 2025', url: 'https://pan.xunlei.com/s/VOAl2JcISN7RdpC7tQ58E4WNA1?pwd=6yyd#' },
    { text: 'SketchUp 2024', url: 'https://pan.xunlei.com/s/VOAl47Wwc5vChKVXk73ljEgXA1?pwd=g6xu#' },
    { text: 'SolidWorks 2024', url: 'https://pan.xunlei.com/s/VOAl4mQJLozyClXaX8k9Z1btA1?pwd=bngq#' },
    { text: 'SolidWorks 2024SP5.0', url: 'https://pan.xunlei.com/s/VOAl4yGn3PGiBhN4CQQBqKAdA1?pwd=zvn5#' },
    { text: 'Blender 4.2', url: 'https://pan.xunlei.com/s/VOAl5guca83B8UJ0t30xaYXqA1?pwd=v83j#' },
    { text: 'Blender 4.0', url: 'https://pan.xunlei.com/s/VOAl5zAaTZUEL58Uh04HRpKhA1?pwd=srui#' },
    { text: 'ZBrush 2025', url: 'https://pan.xunlei.com/s/VOAl95ceCOoU9K0ODnf6Alx7A1?pwd=ngpu#' },
    { text: 'ZBrush 2024', url: 'https://pan.xunlei.com/s/VOAl9NKEM8b-PFjZe2mg_FGxA1?pwd=da5p#' },
    { text: 'KeyShot 2024', url: 'https://pan.xunlei.com/s/VOAlA24HGPS1tqT-E-IP4nkrA1?pwd=pkcx#' },
    { text: 'ENVI 5.6', url: 'https://pan.xunlei.com/s/VOAlAZ7I3yWeXr1momDYs6kTA1?pwd=7nvj#' },
    { text: 'Photoshop 2025', url: 'https://pan.xunlei.com/s/VODpbsIolV-qVoiIsC07wgmhA1?pwd=8ytk#' },
    { text: 'Adobe Illustrator 2025 V29.0', url: 'https://pan.xunlei.com/s/VODpgJ4OqqGXKOhj6W9vZPq6A1?pwd=fvbh#' },
    { text: 'Adobe Lightroom Classic 2025', url: 'https://pan.xunlei.com/s/VODphH3c8u14g1mC4iiM2qpXA1?pwd=dwub#' },
    { text: 'Photoshop 2025神经滤镜', url: 'https://pan.xunlei.com/s/VODphujFPh34cmY4iTl2K9c_A1?pwd=aib8#' },
    { text: 'Adobe Premiere Pro 2025', url: 'https://pan.xunlei.com/s/VODpibwwartrUVtuqbMiN8oxA1?pwd=ju2v#' },
    { text: 'Adobe After Effects 2025', url: 'https://pan.xunlei.com/s/VODpjqBQKYBdBxM31lJfQ0LFA1?pwd=rigc#' },
    { text: 'Adobe Audition 2025', url: 'https://pan.xunlei.com/s/VODpkErRartrUVtuqbMiOBiaA1?pwd=criw#' },
    { text: 'Adobe Bridge 2025', url: 'https://pan.xunlei.com/s/VODpkgIYf8Qa_m5haS8u-AsVA1?pwd=vhe2#' },
    { text: 'Adobe Illustrator 2025 V29.1', url: 'https://pan.xunlei.com/s/VODplAejrUZ9mg1KiBsfJKeOA1?pwd=yfvk#' },
    { text: 'Adobe InCopy 2025', url: 'https://pan.xunlei.com/s/VODplW4wPh34cmY4iTl2M3xPA1?pwd=ie8k#' },
    { text: 'Adobe InDesign 2025', url: 'https://pan.xunlei.com/s/VODpm-W-rUZ9mg1KiBsfJiRjA1?pwd=y83g#' },
    { text: 'Adobe Media Encoder 2025', url: 'https://pan.xunlei.com/s/VODpmMS-f8Qa_m5haS8u00QzA1?pwd=2smd#' },
    { text: 'Adobe Character Animator 2025', url: 'https://pan.xunlei.com/s/VODpmmuOb6zBidi3wvfSjRKMA1?pwd=bae7#' }








































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