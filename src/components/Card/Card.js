export default function Card({ url, title, desc, warna, children }) {
    return (
        <div style={{ border: "1px solid blue", marginTop: "5px" }}>
            {children}
            <p>{title}</p>
            <img src={url}>
            </img>


            {
                warna != '' ? (
                    <p style={{
                        color: warna
                    }}>{desc}</p>
                ) : (
                    <p style={{
                        color: 'yellow'
                    }}>{desc}</p>
                )
            }
        </div>
    )
}