// Data menu M&E Kafe (frontend saja, tanpa database)
const productsData = {
    kopi: {
        name: "Kopi Latte",
        price: "Rp 18.000",
        desc: "Kopi latte lembut perpaduan espresso pekat dan susu hangat dengan sedikit foam di atasnya. Cocok untuk dinikmati sambil mengerjakan tugas.",
        image: "Kopi Latte.jpg",
        specs: [
            "Basis: espresso + susu",
            "Penyajian: panas",
            "Ukuran gelas: 250 ml"
        ]
    },
    teh: {
        name: "Teh Melati",
        price: "Rp 12.000",
        desc: "Teh melati dengan wangi bunga yang menenangkan, bisa disajikan hangat atau dingin sesuai selera.",
        image: "Teh Melati.jpg",
        specs: [
            "Jenis: teh hitam dengan bunga melati",
            "Penyajian: hangat atau dingin",
            "Gula bisa disesuaikan permintaan"
        ]
    },
    aqua: {
        name: "Air Mineral Aqua",
        price: "Rp 6.000",
        desc: "Air mineral botol dingin, cocok untuk menyegarkan tubuh setelah beraktivitas.",
        image: "Aqua.jpg",
        specs: [
            "Isi: 600 ml",
            "Disajikan dingin",
            "Kemasan higienis sekali pakai"
        ]
    },
    keripik: {
        name: "Keripik Kentang",
        price: "Rp 15.000",
        desc: "Keripik kentang renyah rasa gurih, cocok sebagai camilan saat nongkrong di kafe.",
        image: "Keripik Kentang.jpg",
        specs: [
            "Berat bersih: 80 gram",
            "Rasa: original gurih",
            "Saran penyajian: dimakan bersama kopi/teh"
        ]
    }
};

function loadProductDetail() {
    const container = document.getElementById("product-detail");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const key = params.get("product") || "kopi";

    const product = productsData[key] || productsData.kopi;
    fillDetail(product);
}

function fillDetail(product) {
    document.getElementById("detail-image").src = product.image;
    document.getElementById("detail-image").alt = product.name;
    document.getElementById("detail-name").textContent = product.name;
    document.getElementById("detail-price").textContent = product.price;
    document.getElementById("detail-desc").textContent = product.desc;

    const ul = document.getElementById("detail-specs");
    ul.innerHTML = "";
    product.specs.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

function addToCart() {
    alert("Menu ditambahkan ke pesanan di M&E Kafe (simulasi, tanpa database).");
}

window.addEventListener("DOMContentLoaded", loadProductDetail);
