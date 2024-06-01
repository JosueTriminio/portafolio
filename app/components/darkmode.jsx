'use client'
import React, { useEffect, useState } from 'react'

export default function Darkmode() {
    const [dark, setDark] = useState(false)
    


    const handleDark=()=>{
        setDark(!dark)
    }

    useEffect(() => {
     if (dark) {
        document.querySelector('body').classList.add('dark')
        document.querySelector('.header').classList.add('dark')
     }else{
        document.querySelector('body').classList.remove('dark')
        document.querySelector('.header').classList.remove('dark')
     }
    }, [dark])
    
 
    return (
        <>
            <button onClick={()=> handleDark()} className={`${dark ? 'hidden' : 'block'} fixed right-14 flex items-center  gap-1 border px-[7px] 
                                                                      rounded-full shadow hover:shadow-black hover:text-black  shadow-green-400 text-green-400 transition-all duration-300`}>
                <h6 className='text-xs font-semibold'>Dark</h6>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="currentColor" viewBox="0 0 512 512">
                    <path
                        d="M 398.66875981161695 50.23547880690738 Q 332.7598116169545 51.84301412872841 289.3563579277865 95.24646781789639 L 289.3563579277865 95.24646781789639 L 289.3563579277865 95.24646781789639 Q 245.95290423861852 139.4536891679749 244.3453689167975 204.55886970172685 Q 244.3453689167975 217.41915227629514 246.75667189952904 230.27943485086342 Q 282.92621664050233 231.88697017268447 307.0392464678179 256 Q 331.95604395604397 280.11302982731553 334.3673469387755 316.28257456828885 Q 362.49921507064363 329.94662480376763 376.16326530612247 357.27472527472526 Q 387.4160125588697 358.8822605965463 398.66875981161695 358.8822605965463 Q 462.9701726844584 357.27472527472526 505.56985871271587 315.4788069073783 Q 512 309.0486656200942 508.7849293563579 300.2072213500785 Q 503.9623233908948 292.1695447409733 495.1208791208791 293.77708006279437 Q 484.6718995290424 295.38461538461536 474.22291993720563 295.38461538461536 Q 424.3893249607535 293.77708006279437 391.4348508634223 260.8226059654631 Q 358.48037676609107 227.86813186813185 356.87284144427 177.23076923076923 Q 357.67660910518055 144.276295133438 373.7519623233909 116.94819466248038 Q 389.82731554160125 90.42386185243328 417.1554160125589 74.34850863422292 Q 424.3893249607535 69.52590266875981 422.7817896389325 60.68445839874411 Q 420.37048665620097 51.84301412872841 411.52904238618527 51.0392464678179 Q 405.0989010989011 50.23547880690738 398.66875981161695 50.23547880690738 L 398.66875981161695 50.23547880690738 Z M 102.88226059654632 307.44113029827315 Q 103.68602825745683 291.3657770800628 114.13500784929356 280.11302982731553 L 114.13500784929356 280.11302982731553 L 114.13500784929356 280.11302982731553 Q 125.38775510204081 269.6640502354788 141.46310832025117 268.8602825745683 Q 155.9309262166405 268.8602825745683 165.57613814756672 277.70172684458396 Q 176.02511773940344 285.7394034536892 179.24018838304553 298.59968602825745 Q 182.4552590266876 309.8524332810047 193.70800627943484 313.06750392464676 Q 204.9607535321821 315.4788069073783 212.9984301412873 306.6373626373626 Q 222.6436420722135 295.38461538461536 237.91522762951334 294.5808477237049 Q 250.77551020408163 294.5808477237049 259.6169544740973 302.61852433281007 Q 268.458398744113 310.65620094191524 270.0659340659341 322.712715855573 Q 270.0659340659341 323.5164835164835 270.0659340659341 324.320251177394 L 270.0659340659341 325.12401883830455 L 270.0659340659341 325.12401883830455 Q 270.0659340659341 325.12401883830455 270.0659340659341 325.9277864992151 Q 270.0659340659341 325.9277864992151 270.0659340659341 326.7315541601256 Q 270.0659340659341 327.5353218210361 270.0659340659341 328.33908948194664 Q 270.0659340659341 328.33908948194664 270.0659340659341 328.33908948194664 L 270.0659340659341 353.2558869701727 L 270.0659340659341 353.2558869701727 Q 270.0659340659341 362.0973312401884 276.4960753532182 367.723704866562 Q 283.72998430141286 373.3500784929356 292.57142857142856 371.7425431711146 Q 294.1789638932496 371.7425431711146 295.78649921507065 371.7425431711146 Q 307.0392464678179 371.7425431711146 314.27315541601257 378.9764521193093 Q 321.5070643642072 386.2103610675039 321.5070643642072 397.4631083202512 Q 321.5070643642072 408.7158555729984 314.27315541601257 415.9497645211931 Q 307.0392464678179 423.18367346938777 295.78649921507065 423.18367346938777 Q 295.78649921507065 423.18367346938777 294.9827315541601 423.18367346938777 Q 294.9827315541601 423.18367346938777 294.9827315541601 423.18367346938777 Q 294.9827315541601 423.18367346938777 294.1789638932496 423.18367346938777 Q 294.1789638932496 423.18367346938777 294.1789638932496 423.18367346938777 L 79.57299843014128 423.18367346938777 L 79.57299843014128 423.18367346938777 Q 79.57299843014128 423.18367346938777 78.76923076923077 423.18367346938777 Q 78.76923076923077 423.18367346938777 78.76923076923077 423.18367346938777 Q 78.76923076923077 423.18367346938777 77.96546310832025 423.18367346938777 Q 77.96546310832025 423.18367346938777 77.16169544740973 423.18367346938777 Q 61.086342229199374 422.37990580847725 49.83359497645212 411.9309262166405 Q 39.38461538461539 400.67817896389323 38.58084772370486 384.6028257456829 Q 39.38461538461539 368.5274725274725 49.83359497645212 357.27472527472526 Q 61.086342229199374 346.82574568288857 77.16169544740973 346.02197802197804 Q 78.76923076923077 346.02197802197804 80.3767660910518 346.02197802197804 Q 98.0596546310832 346.02197802197804 101.27472527472527 328.33908948194664 L 102.88226059654632 309.8524332810047 L 102.88226059654632 309.8524332810047 Q 102.88226059654632 308.2448979591837 102.88226059654632 307.44113029827315 Q 102.88226059654632 307.44113029827315 102.88226059654632 307.44113029827315 L 102.88226059654632 307.44113029827315 Z M 141.46310832025117 230.27943485086342 Q 109.31240188383046 231.08320251177395 87.61067503924647 252.78492935635794 L 87.61067503924647 252.78492935635794 L 87.61067503924647 252.78492935635794 Q 65.90894819466249 273.6828885400314 64.30141287284144 306.6373626373626 L 64.30141287284144 308.2448979591837 L 64.30141287284144 308.2448979591837 Q 36.169544740973315 313.8712715855573 18.486656200941916 334.7692307692308 Q 0.8037676609105181 355.66718995290427 0 384.6028257456829 Q 0.8037676609105181 417.5572998430141 22.505494505494507 439.2590266875981 Q 44.20722135007849 460.9607535321821 77.16169544740973 461.7645211930926 Q 78.76923076923077 461.7645211930926 79.57299843014128 461.7645211930926 L 293.3751962323391 461.7645211930926 L 293.3751962323391 461.7645211930926 Q 294.9827315541601 461.7645211930926 295.78649921507065 461.7645211930926 Q 323.11459968602827 460.9607535321821 341.6012558869702 442.4740973312402 Q 359.2841444270016 424.7912087912088 360.0879120879121 397.4631083202512 Q 359.2841444270016 373.3500784929356 345.62009419152275 356.47095761381473 Q 331.15227629513345 339.59183673469386 308.6467817896389 334.7692307692308 L 308.6467817896389 329.14285714285717 L 308.6467817896389 329.14285714285717 Q 308.6467817896389 328.33908948194664 308.6467817896389 327.5353218210361 Q 308.6467817896389 327.5353218210361 308.6467817896389 326.7315541601256 Q 308.6467817896389 325.9277864992151 308.6467817896389 325.9277864992151 Q 308.6467817896389 325.12401883830455 308.6467817896389 324.320251177394 L 308.6467817896389 320.30141287284147 L 308.6467817896389 320.30141287284147 Q 308.6467817896389 317.0863422291994 307.84301412872844 313.8712715855573 Q 302.2166405023548 288.1507064364207 283.72998430141286 272.8791208791209 Q 264.43956043956047 256.8037676609105 237.91522762951334 256 Q 220.23233908948194 256 204.9607535321821 264.0376766091052 Q 183.25902668759812 231.88697017268447 141.46310832025117 230.27943485086342 L 141.46310832025117 230.27943485086342 Z"
                    />
                </svg>
            </button>
            <button onClick={()=> handleDark()} className={`${dark ? 'block' : 'hidden'} fixed right-14  flex items-center gap-2 border px-[7px]
                                                                      rounded-full shadow shadow-white text-white hover:shadow-green-400 hover:text-green-400 transition-all duration-300`}>
            <h6 className='text-xs font-semibold'>Ligth</h6>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="currentColor" viewBox="0 0 512 512">
                    <path
                        d="M 297.4704049844237 62.205607476635514 Q 295.8753894080997 55.82554517133956 290.2928348909657 52.63551401869159 Q 283.91277258566976 50.242990654205606 277.5327102803738 54.230529595015575 L 205.7570093457944 103.67601246105919 L 205.7570093457944 103.67601246105919 L 133.98130841121494 54.230529595015575 L 133.98130841121494 54.230529595015575 Q 127.601246105919 50.242990654205606 122.01869158878505 52.63551401869159 Q 115.6386292834891 55.82554517133956 114.04361370716511 62.205607476635514 L 98.09345794392523 148.33644859813083 L 98.09345794392523 148.33644859813083 L 11.962616822429906 164.2866043613707 L 11.962616822429906 164.2866043613707 Q 5.582554517133956 165.8816199376947 2.392523364485981 171.46417445482865 Q 0 177.8442367601246 3.987538940809969 184.22429906542055 L 53.43302180685358 256 L 53.43302180685358 256 L 3.987538940809969 327.77570093457945 L 3.987538940809969 327.77570093457945 Q 0 334.1557632398754 2.392523364485981 340.53582554517135 Q 5.582554517133956 346.1183800623053 11.962616822429906 347.71339563862927 L 98.09345794392523 363.66355140186914 L 98.09345794392523 363.66355140186914 L 114.04361370716511 449.7943925233645 L 114.04361370716511 449.7943925233645 Q 115.6386292834891 456.17445482866043 121.22118380062305 459.3644859813084 Q 127.601246105919 461.7570093457944 133.98130841121494 457.7694704049844 L 205.7570093457944 408.3239875389408 L 205.7570093457944 408.3239875389408 L 277.5327102803738 457.7694704049844 L 277.5327102803738 457.7694704049844 Q 283.91277258566976 461.7570093457944 290.2928348909657 459.3644859813084 Q 295.8753894080997 456.17445482866043 297.4704049844237 449.7943925233645 L 305.4454828660436 408.3239875389408 L 305.4454828660436 408.3239875389408 Q 292.6853582554517 402.74143302180687 281.5202492211838 395.5638629283489 L 275.9376947040498 425.86915887850466 L 275.9376947040498 425.86915887850466 L 212.93457943925233 382.00623052959503 L 212.93457943925233 382.00623052959503 Q 205.7570093457944 378.01869158878503 198.57943925233644 382.00623052959503 L 135.57632398753893 425.86915887850466 L 135.57632398753893 425.86915887850466 L 121.22118380062305 350.1059190031153 L 121.22118380062305 350.1059190031153 Q 119.62616822429906 342.13084112149534 111.65109034267913 340.53582554517135 L 35.88785046728972 326.18068535825546 L 35.88785046728972 326.18068535825546 L 79.75077881619937 263.1775700934579 L 79.75077881619937 263.1775700934579 Q 83.73831775700934 256 79.75077881619937 248.82242990654206 L 35.88785046728972 185.81931464174454 L 35.88785046728972 185.81931464174454 L 111.65109034267913 171.46417445482865 L 111.65109034267913 171.46417445482865 Q 119.62616822429906 169.86915887850466 122.01869158878505 161.89408099688472 L 135.57632398753893 86.13084112149532 L 135.57632398753893 86.13084112149532 L 198.57943925233644 129.99376947040497 L 198.57943925233644 129.99376947040497 Q 205.7570093457944 133.98130841121494 212.93457943925233 129.99376947040497 L 275.9376947040498 86.13084112149532 L 275.9376947040498 86.13084112149532 L 281.5202492211838 116.43613707165109 L 281.5202492211838 116.43613707165109 Q 292.6853582554517 109.25856697819314 305.4454828660436 103.67601246105919 L 297.4704049844237 62.205607476635514 L 297.4704049844237 62.205607476635514 Z M 205.7570093457944 153.9190031152648 Q 162.69158878504672 154.71651090342678 133.18380062305295 183.42679127725856 L 133.18380062305295 183.42679127725856 L 133.18380062305295 183.42679127725856 Q 104.47352024922118 212.93457943925233 103.67601246105919 256 Q 104.47352024922118 299.06542056074767 133.18380062305295 328.5732087227414 Q 162.69158878504672 357.2834890965732 205.7570093457944 358.0809968847352 Q 222.50467289719626 358.0809968847352 236.85981308411215 353.29595015576325 Q 229.6822429906542 342.13084112149534 223.30218068535825 330.1682242990654 Q 214.52959501557632 332.5607476635514 205.7570093457944 332.5607476635514 Q 173.05919003115264 331.7632398753894 151.5264797507788 310.2305295950156 Q 129.99376947040497 288.6978193146417 129.19626168224298 256 Q 129.99376947040497 223.30218068535825 151.5264797507788 201.76947040498442 Q 173.05919003115264 180.23676012461058 205.7570093457944 179.4392523364486 Q 214.52959501557632 179.4392523364486 223.30218068535825 181.83177570093457 Q 229.6822429906542 169.86915887850466 236.85981308411215 158.70404984423675 Q 222.50467289719626 153.9190031152648 205.7570093457944 153.9190031152648 L 205.7570093457944 153.9190031152648 Z M 256.79750778816197 256 Q 256.79750778816197 224.89719626168224 271.9501557632399 198.57943925233644 L 271.9501557632399 198.57943925233644 L 271.9501557632399 198.57943925233644 Q 287.10280373831773 172.26168224299064 314.2180685358255 156.31152647975077 Q 341.3333333333333 141.15887850467288 371.6386292834891 141.15887850467288 Q 401.94392523364485 141.15887850467288 429.05919003115264 156.31152647975077 Q 456.17445482866043 172.26168224299064 471.32710280373834 198.57943925233644 Q 486.4797507788162 224.89719626168224 486.4797507788162 256 Q 486.4797507788162 287.10280373831773 471.32710280373834 313.42056074766356 Q 456.17445482866043 339.7383177570093 429.05919003115264 355.6884735202492 Q 401.94392523364485 370.8411214953271 371.6386292834891 370.8411214953271 Q 341.3333333333333 370.8411214953271 314.2180685358255 355.6884735202492 Q 287.10280373831773 339.7383177570093 271.9501557632399 313.42056074766356 Q 256.79750778816197 287.10280373831773 256.79750778816197 256 L 256.79750778816197 256 Z M 512 256 Q 512 217.7196261682243 492.85981308411215 185.81931464174454 L 492.85981308411215 185.81931464174454 L 492.85981308411215 185.81931464174454 Q 474.5171339563863 153.9190031152648 441.81931464174454 134.77881619937693 Q 408.3239875389408 115.6386292834891 371.6386292834891 115.6386292834891 Q 334.95327102803736 115.6386292834891 301.4579439252336 134.77881619937693 Q 268.7601246105919 153.9190031152648 250.41744548286604 185.81931464174454 Q 231.2772585669782 217.7196261682243 231.2772585669782 256 Q 231.2772585669782 294.2803738317757 250.41744548286604 326.18068535825546 Q 268.7601246105919 358.0809968847352 301.4579439252336 377.22118380062307 Q 334.95327102803736 396.3613707165109 371.6386292834891 396.3613707165109 Q 408.3239875389408 396.3613707165109 441.81931464174454 377.22118380062307 Q 474.5171339563863 358.0809968847352 492.85981308411215 326.18068535825546 Q 512 294.2803738317757 512 256 L 512 256 Z"
                    />
                </svg>

            </button >
        </>
    )
}
