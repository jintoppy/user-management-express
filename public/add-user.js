const nameTxt = document.querySelector('#name');
const industryTxt = document.querySelector('#industry');
const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = nameTxt.value;
    const industry = industryTxt.value;     
    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'token': localStorage.getItem('token')
        },
        body: JSON.stringify({
            name,
            industry
        })      
    });
    try {
        const res = await response.json();
        if(res.status === 200){
            location.href = '/users';
        }
        else {
            document.querySelector('#msg').innerHTML = res.msg;            
        }
    }
    catch(e){
        console.log(e);
    }
    
    
    
});