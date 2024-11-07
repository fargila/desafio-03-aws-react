export function toggle() 
{
    const blur = document.querySelector('#blur')
    blur?.classList.toggle('acitve')

    const popup = document.querySelector('#popup')
    popup?.classList.toggle('active')
}
