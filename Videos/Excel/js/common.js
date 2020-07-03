function show(){
    let content = document.getElementById("navbarToggleExternalContent");
    if(content.className == "col-md-3 mb-md-0 p-md-4 d-lg-block d-md-block d-none collapse"){
        content.classList.add('d-block');
        content.classList.remove('d-none');
    }
    else{
        content.classList.add('d-none');
        content.classList.remove('d-block');
    }
}
