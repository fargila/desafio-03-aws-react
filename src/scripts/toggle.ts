export function edit()
{    
    const showEdit = document.querySelector('.showEdit')
    const editIcon = document.querySelector('.iconEdit')
    const checkIcon = document.querySelector('.iconCheck')

    checkIcon?.classList.toggle('active')
    editIcon?.classList.toggle('active')
    showEdit?.classList.toggle('active')
}

export function toggle() 
{
    const blured = document.querySelector('.blured')
    blured?.classList.toggle('active')

    const popup = document.querySelector('.popup')
    popup?.classList.toggle('active')
}

export function socialLink(socialMedia: string)
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
    
    const cardEdit = document.querySelector('.cardEdit')
    cardEdit?.classList.toggle('active')

    const popupEdit = document.querySelector('.popupEdit')
    popupEdit?.classList.toggle('active')

}