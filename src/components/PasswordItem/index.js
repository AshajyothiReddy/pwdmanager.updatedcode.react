import './index.css'

const PasswordItem = props => {
  const {website, username, id, onDelete} = props

  const deletePassword = () => {
    onDelete(id)
  }
  return (
    <li className="password-list-item">
      <div>
        <p>{website}</p>
        <p>{username}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
          className="stars-img"
        />
      </div>
      <button
        data-testid="delete"
        type="button"
        onClick={deletePassword}
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

export default PasswordItem
