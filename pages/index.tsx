import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactPlayer from "react-player";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_header}>
                <div className={styles.header_photo}>
                    <div>
                        <img src="/images/New Logo.png" className={styles.logo} />
                    </div>
                    <div className={styles.content_heading}>
                        <h1>ระบบจ้างงานผู้รับเหมา</h1>
                    </div>
                    <div className={styles.btn}>
                        <h1>แก้ปัญหาการโกงในงานก่อสร้าง</h1>
                    </div>
                    <div className={styles.content_heading}>
                        <h3>สนับสนุนโดย</h3>
                    </div>
                    <div>
                        <img src="/images/2.png" className={styles.sponsor_logo} />
                    </div>
                </div>


            </div>
            <div className={styles.content_service}>
                <div className={styles.grid_3items}>
                    <div className={styles.content_service_item}>
                        <img src="/images/tambann_box1.png" className={styles.service_logo} />
                        <div>
                            <h5>
                                ควบคุมคุณภาพงานด้วย<br />ระบบสัญญาและอนุมัติการ<br />จ่ายเงิน
                            </h5>
                        </div>
                    </div>
                    <div className={styles.content_service_item}>
                        <img src="/images/tambann_box1.png" className={styles.service_logo} />
                        <div>
                            <h5>
                                ควบคุมคุณภาพงานด้วย<br />ระบบสัญญาและอนุมัติการ<br />จ่ายเงิน
                            </h5>
                        </div>
                    </div>
                    <div className={styles.content_service_item}>
                        <img src="/images/tambann_box1.png" className={styles.service_logo} />
                        <div>
                            <h5>
                                ควบคุมคุณภาพงานด้วย<br />ระบบสัญญาและอนุมัติการ<br />จ่ายเงิน
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ReactPlayer
                    url="https://youtu.be/CDwcQaJamT8"
                    width={500}
                    height={250}
                    className={styles.videoo}
                />
            </div>
            <div className={styles.content_photo}>
                <div className={styles.grid2}>
                    <div className={styles.grid2_photo1}>
                        <img src="/images/tambann_pic1.png" />
                    </div>
                    <div className={styles.grid2_photo1}>
                        <img src="/images/tambann_pic1.png" />
                    </div>
                </div>
            </div>
            <div className={styles.container_blue}>
                <div className={styles.white_tab} />
                <div className={styles.text_content}>
                    <h1>เพื่อแก้ปัญหาการโกงในงานก่อสร้าง</h1>
                    <h2>Tambaan.co ดำเนิน {"โครงการสนับสนุนการจ้างผู้รับเหมา"}
                        <span style={{ color: "#fecd06" }}> ฟรี</span>
                    </h2>
                </div>
                <div className={styles.grid_partner}>
                    <div className={styles.partner_item}>
                        <img src="/images/6.png" style={{ width: "30%" }} />
                        <h1>ผู้ว่าจ้าง</h1>
                        <h4>
                            บริการจัดทำขอบเขตงานและช่วยหาผู้ออกแบบ, ทำ BoQ, ผู้รับเหมา, ผู้ตรวจหน้างาน,
                            และช่วยจัดทำสัญญาให้<span style={{ color: "#fecd06" }}>ฟรี!</span>
                        </h4>
                        <div className={styles.btn_link}>
                            <a href="https://google.com" rel="opener noreferrer" target="_blank">okay</a>
                        </div>
                    </div>
                    <div className={styles.partner_item}>
                        <img src="/images/6.png" style={{ width: "30%" }} />
                        <h1>ผู้ว่าจ้าง</h1>
                        <h4>
                            บริการจัดทำขอบเขตงานและช่วยหาผู้ออกแบบ, ทำ BoQ, ผู้รับเหมา, ผู้ตรวจหน้างาน,
                            และช่วยจัดทำสัญญาให้<span style={{ color: "#fecd06" }}>ฟรี!</span>
                        </h4>
                        <div className={styles.btn_link}>
                            <a href="https://google.com" rel="opener noreferrer" target="_blank">okay</a>
                        </div>
                    </div>
                    <div className={styles.partner_item}>
                        <img src="/images/6.png" style={{ width: "30%" }} />
                        <h1>ผู้ว่าจ้าง</h1>
                        <h4>
                            บริการจัดทำขอบเขตงานและช่วยหาผู้ออกแบบ, ทำ BoQ, ผู้รับเหมา, ผู้ตรวจหน้างาน,
                            และช่วยจัดทำสัญญาให้<span style={{ color: "#fecd06" }}>ฟรี!</span>
                        </h4>
                        <div className={styles.btn_link}>
                            <a href="https://google.com" rel="opener noreferrer" target="_blank">okay</a>
                        </div>
                    </div>
                </div>
                <div className={styles.grid_contact}>
                    <div className={styles.contact_item1}>
                        <img src="/images/5.png"  />
                    </div>
                    <div className={styles.line_icon}>
                        <h1>สมัคร/ติดต่อทีมงาน</h1>
                        <a href="https://google.com">
                            <img src="/images/tambann_iconLINE.png" />
                        </a>
                        <br/>
                        <a href="https://google.com">
                            <img src="/images/tambann_iconLINE.png" />
                        </a>
                    </div>
                </div>
                <div className={styles.top_footer}></div>
                <div className={styles.center_footer}>
                    <div className={styles.grid_footer}>
                        <div className={styles.grid_footer_item}>
                            <h1>766</h1>
                            <h2>ผู้สมัครใช้บริการ</h2>
                        </div>
                        <div className={styles.grid_footer_item}>
                            <h1>766</h1>
                            <h2>ผู้สมัครใช้บริการ</h2>
                        </div>
                        <div className={styles.grid_footer_item}>
                            <h1>766</h1>
                            <h2>ผู้สมัครใช้บริการ</h2>
                        </div>
                    </div>  
                </div>
                <div className={styles.bottom_footer}>
                    <span className="material-icons">
                        Copyright 2021 - Tambaan.co
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home
