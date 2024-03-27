export const Footer = (): React.JSX.Element => {
    const currentYear = new Date().getFullYear();
    return <footer className={'p-6 text-center text-sm text-black/60'}>© {currentYear}. El Dorado.</footer>;
};

export default Footer;
