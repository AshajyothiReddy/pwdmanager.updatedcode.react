import './index.css'

const RenderPasswordsVisible = props => {
  const {username, website, password, id, onDelete} = props

  const onDeletePassword = () => {
    onDelete(id)
  }

  return (
    <li className="password-list-item">
      <div>
        <p>{website}</p>
        <p>{username}</p>
        <p>{password}</p>
      </div>
      <button
        data-testid="delete"
        type="button"
        onClick={onDeletePassword}
        className="del-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default RenderPasswordsVisible
