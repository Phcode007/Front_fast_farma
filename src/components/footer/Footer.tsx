/* eslint-disable prefer-const */
function Footer() {
  let data = new Date().getFullYear();

  return (
    <div className="flex justify-center bg-[#4A70A9] text-white">
      <div className="container flex flex-col items-center py-4">
        <p className="text-xl font-bold">Fast Farma| Copyright: {data}</p>

        <p className="text-lg">&copy; Feito por Paulo Henrique Belarmino</p>
      </div>
    </div>
  );
}

export default Footer;
