function Profile(props) {
  console.log(props)
  return (
    <div className='container'>
        <h1>Profile</h1>
        <table>
          <tr>
            <th>Nick Name</th>
            <td>{ props.location.user.nickname }</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{ props.location.user.username }</td>
          </tr>
        </table>
    </div>
  )
}

export default Profile