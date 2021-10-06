export const handleForm = (event, namesInputs, handleClick, path) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    namesInputs.map(name => localStorage.setItem(name, formData.get(name)))
    handleClick(path)
}