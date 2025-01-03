const Shiba = () => {
  return <img src="https://g.foolcdn.com/editorial/images/788704/shiba-inu-dog-doge-dogecoin-1201x800-6a45073.jpeg" />
}

const SharPei = () => {
  return <img src="https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11171105/202106GettyImages-1283678952-scaled-1.jpg" />
}

const App = () => {
  return (
    <div>
      <Shiba />
      <SharPei />
      <Shiba />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

