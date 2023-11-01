function message(){
    var Name=document.getElementById('Name');
    var Phone=document.getElementById('Phone');
    var Age=document.getElementById('Age');
    var Gender=document.getElementById('Gender');
    var DOA=document.getElementById('DOA');
    const success=document.getElementById('success');
    const danger=document.getElementById('danger');

    if(Name.value ==='' || Phone.value ===''|| Age.value==='' || Gender.value==='' || DOA.value===''){
        danger.style.display='block';
    }
    else{
        setTimeout(()=> {
            Name.value='';
            Phone.value='';
            Age.value='';
            Gender.value='';
            DOA.value='';
        }, 2000);
        success.style.display='block';
    }
    setTimeout(() =>{
        danger.style.display='none';
        success.style.display='none';
    }, 4000);
}
