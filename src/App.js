import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from './components/PasswordItem'
import RenderPasswordsVisible from './components/PasswordVisibleItem'
import './App.css'

class App extends Component {
  state = {
    showPasswords: 'checked',
    website: '',
    username: '',
    password: '',
    count: 0,
    passwordsList: [],
    searchInput: '',
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  toggleCheckbox = () => {
    this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const updatedPasswordList = passwordsList.filter(each => each.id !== id)

    this.setState({
      passwordsList: updatedPasswordList,
    })
    console.log('deleted')
  }

  renderNoPasswords = () => (
    <div className="no-passwords-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        className="no-password-img"
        alt="no passwords"
      />
      <p className="heading">No Passwords</p>
    </div>
  )

  onSubmitForm = event => {
    event.preventDefault()
    const {username, website, password} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({count: prevState.count + 1}))
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {username, website, password, searchInput} = this.state
    const {count, showPasswords, passwordsList} = this.state
    const passwordSearchResults = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="logo"
          alt="app logo"
        />
        <div className="add-password-container">
          <div className="add-new-pwd-container">
            <h1 className="heading">Add New Password</h1>
            <form className="form" onSubmit={this.onSubmitForm}>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="input-logo-img"
                  alt="website"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  value={website}
                  className="input-text-container"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="input-logo-img"
                  alt="username"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  className="input-text-container"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="input-logo-img"
                  alt="password"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  className="input-text-container"
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="password-manager-container">
          <div className="header">
            <div className="heading-password-img-container">
              <h1 className="heading">Your Passwords</h1>
              <p>{count}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="input-logo-img"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search"
                className="input-text-container"
                value={searchInput}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkbox"
              onChange={this.toggleCheckbox}
            />
            <label htmlFor="checkbox">Show Passwords</label>
          </div>
          {count !== 0 ? (
            <ul className="pwd-list">
              {passwordSearchResults.map(each => (
                <PasswordItem
                  key={each.id}
                  website={each.website}
                  username={each.username}
                  deletePassword={this.deletePassword}
                />
              ))}
            </ul>
          ) : (
            this.renderNoPasswords()
          )}
        </div>
      </div>
    )
  }
}

export default App
