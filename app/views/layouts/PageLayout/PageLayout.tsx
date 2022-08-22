import RootLayout from "@layouts/RootLayout"
import Footer from "@components/Footer"
import Header from "@components/Header"
import DrawerMenu from "@views/includes/DrawerMenu";


const PageLayout = ({ children, metaData }) => {

    return (
        <RootLayout metaData={metaData}>
            <DrawerMenu />
            <Header cta={{ name: 'Support the MVMT', href: 'https://ko-fi.com/wtfmvmt'}}navLinks={[{ name: '' }, { name: '' }]}
                favicon={{ src: 'https://static.shuffle.dev/uploads/files/c5/c588f2e6e97dec56040c09794a6a944110e98d9d/Untitled-design.png' }} />
            {children}
            <Footer impressum={"Conscious Creators for The Future"} copyright={" © 2022 WeTheFuture. All rights reserved."} />
        </RootLayout>
    )
}

export default PageLayout