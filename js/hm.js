const searchInput = document.getElementById('searchInput');
const dropdownMenu = document.getElementById('dropdown');
const options = [
    { text: 'Adobe 2024全家桶', url: 'https://pan.xunlei.com/s/VO9ZgMZTZlpVOEv1-7yc6UO0A1?pwd=yi7m#' },
    { text: 'Photoshop 2024 25.11', url: 'https://pan.xunlei.com/s/VO9ZgitZthQJA3jech55lXDkA1?pwd=4r6e#' },
    { text: 'Photoshop 2024', url: 'https://pan.xunlei.com/s/VO9Zh0nwU-HW8ZfEfbRkbBBSA1?pwd=iduy#' },
    { text: 'Premiere 2024 24.4.1', url: 'https://pan.xunlei.com/s/VO9ZhO7yDtSCJ6iviINdKV4_A1?pwd=h3ar#' },
    { text: 'Acrobat DC 2024', url: 'https://pan.xunlei.com/s/VO9ZiNN_F01TBjaOktqmNFTiA1?pwd=35xx#' },
    { text: 'Animate 2024', url: 'https://pan.xunlei.com/s/VO9ZidaChASkTUoPEOGzi_M9A1?pwd=hp9z#' },
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
    { text: 'CAD 2025', url: 'https://pan.xunlei.com/s/VO9Zoy3OQ5SHZYrWwzs5FDAZA1?pwd=zjgh#' },
    { text: 'CAD 2024', url: 'https://pan.xunlei.com/s/VO9Zp4we9EzSvqi1lfaEq4W3A1?pwd=467b#' },
    { text: '达芬奇 19.0.2', url: 'https://pan.xunlei.com/s/VO9_3U_IhASkTUoPEOGzsCbAA1?pwd=zvnj#' },
    { text: '达芬奇 19', url: 'https://pan.xunlei.com/s/VO9_3ae6DidCQ3y_ekkUpGmSA1?pwd=666d#' },
    { text: 'Navicat 17', url: 'https://pan.xunlei.com/s/VO9ZxZzx9EzSvqi1lfaEtt20A1?pwd=cynv#' },
    { text: 'Navicat 16', url: 'https://pan.xunlei.com/s/VO9ZxgoCSWSh3qLU6yQd9QLxA1?pwd=f2pt#' },
    { text: 'Keil5 C51v960 + MDK525', url: 'https://pan.xunlei.com/s/VO9ZypOiG8c65Fi21y6TJuxjA1?pwd=we9f#' },
    { text: 'Keil uvision5 C51v957', url: 'https://pan.xunlei.com/s/VO9Zyx2EthQJA3jech55t8X5A1?pwd=aphd#' },






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