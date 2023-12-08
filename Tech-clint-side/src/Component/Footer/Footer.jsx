
const Footer = () => {
    return (
        <footer className="footer p-4 md:p-10 mt-4 bg-[#111111c1] text-white ">
      <nav>
        <header className="footer-title">Brands</header>
        <a className="link link-hover">Google</a>
        <a className="link link-hover">Apple</a>
        <a className="link link-hover">Microsoft</a>
        <a className="link link-hover">Samsung</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">Add Product</a>
        <a className="link link-hover">Devices</a>
        <a className="link link-hover">My cart</a>
        <a className="link link-hover">Join</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-[#FFF]">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="username@site.com"
              className="input input-bordered text-[#111111b1] w-full pr-16"
            />
            <button className="btn bg-[rgba(6,147,227,1)] hover:bg-[#0bd5dc] absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
    );
};

export default Footer;