import Card from "../components/Card/Card";
import Table from "../components/Table";

const images = [{
    url: 'dsd.sd',
    title: 'hp',
    desc: 'dsdsdsd'
}, {
    url: 'dsd.sd',
    title: 'hp1',
    desc: 'cok'
}, {
    url: 'dsd.sd',
    title: 'hp2',
    desc: 'des'
}]

export default function About() {

    return (
        <>
            <Table data={'ABOUT'}></Table>

            <Card url={images[0].ur} title={images[0].title} desc={images[0].desc} warna=''>
                <p>JANCOK</p>

            </Card>
            <Card url={images[0].ur} title={images[0].title} desc={images[0].desc} warna={'green'}></Card>



        </>
    )
}