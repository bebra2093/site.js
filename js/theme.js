let themeColor = true



function switchTheme(value){
if (value === true){
    document.body.setAttribute('data-bs-theme', 'light')
    }else{
        document.body.setAttribute('data-bs-theme', 'dark')
    }
}

function toggleTheme(){
    themeColor =!themeColor
    switchTheme(themeColor)
}