document.querySelectorAll('.tag').forEach(elemento => {

    const tagName = elemento.tagName.toLowerCase()
    elemento.style.borderColor = '#616161'

    if(!elemento.classList.contains('nolabel'))
    {   //está contido no conjunto de classe o 'nolabel'?
        const label = document.createElement('label')
        label.style.backgroundColor = 'red'
        label.innerHTML = tagName
        elemento.insertBefore(label,elemento.childNodes[0])
    }
})