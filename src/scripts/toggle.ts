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