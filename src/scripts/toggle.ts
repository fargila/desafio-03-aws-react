export function edit()
{    
    const editIcon = document.querySelector('.iconEdit')
    const checkIcon = document.querySelector('.iconCheck')
    const showEdit = document.querySelectorAll('.showEdit')
    const showEdition = document.querySelector('.showEdition')
    const cardEdit = document.querySelector('.cardEdit')

    checkIcon?.classList.toggle('active')
    editIcon?.classList.toggle('active')
    showEdit.forEach(item => { item.classList.toggle('active') })
    showEdition?.classList.toggle('active')
    cardEdit?.classList.toggle('active')
}

export function toggle() 
{
    const blured = document.querySelector('.blured')
    blured?.classList.toggle('active')

    const popup = document.querySelector('.popup')
    popup?.classList.toggle('active')
}

export function socialLink()
{
    const blured = document.querySelector('.blured')
    blured?.classList.toggle('active')

    const socialLink = document.querySelector('.socialLink')
    socialLink?.classList.toggle('active')

    const popupSocial = document.querySelector('.popupSocial')
    popupSocial?.classList.toggle('active')
}

export function editToggle()
{
    const blured = document.querySelector('.blured')
    blured?.classList.toggle('active')
    
    // const cardEdit = document.querySelector('.cardEdit')
    // cardEdit?.classList.toggle('active')

    const popupEdit = document.querySelector('.popupEdit')
    popupEdit?.classList.toggle('active')

}