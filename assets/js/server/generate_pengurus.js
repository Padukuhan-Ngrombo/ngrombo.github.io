/* 
    File ini isinya adalah script untuk generate content website nya secara otomatis

    File ini tidak perlu di edit2, temen2 hanya perlu fokus ke file2 yang ada di dalam folder data
*/


// Pengurus Dusun Side
const pengurusDusunContainer = document.getElementById("pengurus-dusun");

pengurus_dusun.forEach((data) => {
    const divCol = document.createElement("div");
    divCol.className = "col-lg-4 col-md-6";

    const divMember = document.createElement("div");
    divMember.className = "member";
    divMember.setAttribute("data-aos", "fade-up");

    const divPicture = document.createElement("div");
    divPicture.className = "pic";

    const img = document.createElement("img");
    img.className = "img-fluid";
    img.src = "assets/img/pengurus/" + data.fotoOrangnya;

    divPicture.appendChild(img);

    // creating pengurus dusun info
    const divMemberInfo = document.createElement("div");
    divMemberInfo.className = "member-info";

    const h4Nama = document.createElement("h4");
    h4Nama.innerHTML = data.nama;

    const spanPosisi = document.createElement("span");
    spanPosisi.innerHTML = data.jabatan;

    divMemberInfo.appendChild(h4Nama);
    divMemberInfo.appendChild(spanPosisi);

    const divSocial = document.createElement("div");
    divSocial.className = "social";

    if(data.social.whatsapp !== ""){
        const a = document.createElement("a");
        a.href = data.social.whatsapp;

        const iWa = document.createElement("i");
        iWa.className = "bi bi-whatsapp";

        a.appendChild(iWa);

        divSocial.appendChild(a);
    }

    if(data.social.facebook !== ""){
        const a = document.createElement("a");
        a.href = data.social.facebook;

        const iWa = document.createElement("i");
        iWa.className = "bi bi-facebook";

        a.appendChild(iWa);

        divSocial.appendChild(a);
    }


    if(data.social.instagram !== ""){
        const a = document.createElement("a");
        a.href = data.social.instagram;

        const iIg = document.createElement("i");
        iIg.className = "bi bi-instagram";

        a.appendChild(iIg);

        divSocial.appendChild(a);
    }

    if(data.social.tiktok !== ""){
        const a = document.createElement("a");
        a.href = data.social.tiktok;

        const iTiktok = document.createElement("i");
        iTiktok.className = "bi bi-tiktok";

        a.appendChild(iTiktok);

        divSocial.appendChild(a);
    }

    divMemberInfo.appendChild(divSocial);
    // end of creating member info

    // append all to div col
    divMember.appendChild(divPicture);
    divMember.appendChild(divMemberInfo);
    divCol.appendChild(divMember);
    pengurusDusunContainer.appendChild(divCol);
})
// End Of Pengurus Dusun Side