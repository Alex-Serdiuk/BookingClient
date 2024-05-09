import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "./room.css";
import useFetch from '../../hooks/useFetch';

const Room = ({setOpen, roomId}) => {
    const {data, loading, error} = useFetch(`/Room/${roomId}`);
  return (
    <>
    <div className='roomModal'>
        <div className="roomContainer">
            <FontAwesomeIcon 
                icon={faCircleXmark} 
                className="roomClose" 
                onClick={() => setOpen(false)}
            />
            <div className="roomLeft">
            
            </div>
            <div className="roomRight">

            </div>
        
        </div>
    </div>
    
</>
    // <>
    //   <div className="div">
    //     <div className="div-2">
    //       <div className="div-3">
    //         <div className="column">
    //           <div className="div-4">
    //             <div className="div-5">
    //               <img
    //                 loading="lazy"
    //                 srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/97f6ca681f1321bbf96f252002d062080d691a171a4192e468f2bbd7484280e2?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f6ca681f1321bbf96f252002d062080d691a171a4192e468f2bbd7484280e2?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f6ca681f1321bbf96f252002d062080d691a171a4192e468f2bbd7484280e2?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f6ca681f1321bbf96f252002d062080d691a171a4192e468f2bbd7484280e2?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f6ca681f1321bbf96f252002d062080d691a171a4192e468f2bbd7484280e2?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f6ca681f1321bbf96f252002d062080d691a171a4192e468f2bbd7484280e2?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f6ca681f1321bbf96f252002d062080d691a171a4192e468f2bbd7484280e2?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/97f6ca681f1321bbf96f252002d062080d691a171a4192e468f2bbd7484280e2?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                 className="img"
    //               />
    //               <div className="div-6">
    //                 <img
    //                   loading="lazy"
    //                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f43c82d1eb84d060944a530584383c194820821c508ba9afce91b1ee3275aa8?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                   className="img-2"
    //                 />
    //                 <img
    //                   loading="lazy"
    //                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/640600ca1e664384dfc5f09ebadebc286174cc96c2db21d46e5c48c97dbd75e2?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                   className="img-3"
    //                 />
    //               </div>
    //             </div>
    //             <div className="div-7">
    //               <div className="div-8">
    //                 <div className="column-2">
    //                   <img
    //                     loading="lazy"
    //                     srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1307e00d74d08628d26b3786a0121f15056990c2d222da90e136cc15ecb95404?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1307e00d74d08628d26b3786a0121f15056990c2d222da90e136cc15ecb95404?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1307e00d74d08628d26b3786a0121f15056990c2d222da90e136cc15ecb95404?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1307e00d74d08628d26b3786a0121f15056990c2d222da90e136cc15ecb95404?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1307e00d74d08628d26b3786a0121f15056990c2d222da90e136cc15ecb95404?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1307e00d74d08628d26b3786a0121f15056990c2d222da90e136cc15ecb95404?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1307e00d74d08628d26b3786a0121f15056990c2d222da90e136cc15ecb95404?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1307e00d74d08628d26b3786a0121f15056990c2d222da90e136cc15ecb95404?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                     className="img-4"
    //                   />
    //                 </div>
    //                 <div className="column-3">
    //                   <img
    //                     loading="lazy"
    //                     srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6d6fa105aa38976fbbbc290b87d055ab41862055e3e44ee57fe9d2137b7c5228?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d6fa105aa38976fbbbc290b87d055ab41862055e3e44ee57fe9d2137b7c5228?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d6fa105aa38976fbbbc290b87d055ab41862055e3e44ee57fe9d2137b7c5228?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d6fa105aa38976fbbbc290b87d055ab41862055e3e44ee57fe9d2137b7c5228?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d6fa105aa38976fbbbc290b87d055ab41862055e3e44ee57fe9d2137b7c5228?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d6fa105aa38976fbbbc290b87d055ab41862055e3e44ee57fe9d2137b7c5228?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d6fa105aa38976fbbbc290b87d055ab41862055e3e44ee57fe9d2137b7c5228?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d6fa105aa38976fbbbc290b87d055ab41862055e3e44ee57fe9d2137b7c5228?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                     className="img-5"
    //                   />
    //                 </div>
    //                 <div className="column-4">
    //                   <img
    //                     loading="lazy"
    //                     srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e2ba1ce5e232631bbcb2b55ab520ce130761058aeae04cf77abe8a6cb285f11?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2ba1ce5e232631bbcb2b55ab520ce130761058aeae04cf77abe8a6cb285f11?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2ba1ce5e232631bbcb2b55ab520ce130761058aeae04cf77abe8a6cb285f11?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2ba1ce5e232631bbcb2b55ab520ce130761058aeae04cf77abe8a6cb285f11?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2ba1ce5e232631bbcb2b55ab520ce130761058aeae04cf77abe8a6cb285f11?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2ba1ce5e232631bbcb2b55ab520ce130761058aeae04cf77abe8a6cb285f11?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2ba1ce5e232631bbcb2b55ab520ce130761058aeae04cf77abe8a6cb285f11?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2ba1ce5e232631bbcb2b55ab520ce130761058aeae04cf77abe8a6cb285f11?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                     className="img-6"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="column-5">
    //           <div className="div-9">
    //             <img
    //               loading="lazy"
    //               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e8cd4fed-b66d-4603-8fa8-8369025ea802?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cd4fed-b66d-4603-8fa8-8369025ea802?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cd4fed-b66d-4603-8fa8-8369025ea802?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cd4fed-b66d-4603-8fa8-8369025ea802?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cd4fed-b66d-4603-8fa8-8369025ea802?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cd4fed-b66d-4603-8fa8-8369025ea802?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cd4fed-b66d-4603-8fa8-8369025ea802?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8cd4fed-b66d-4603-8fa8-8369025ea802?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //               className="img-7"
    //             />
    //             <div className="div-10">
    //               Двомісний номер економ-класу з мансардою
    //             </div>
    //             <div className="div-11">
    //               <img
    //                 loading="lazy"
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/b92801e00fd32e49a033126703dc2afc34a3ad335939a3ca7db36637bcd961df?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                 className="img-8"
    //               />
    //               <img
    //                 loading="lazy"
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/b92801e00fd32e49a033126703dc2afc34a3ad335939a3ca7db36637bcd961df?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                 className="img-9"
    //               />
    //               <img
    //                 loading="lazy"
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/b92801e00fd32e49a033126703dc2afc34a3ad335939a3ca7db36637bcd961df?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                 className="img-10"
    //               />
    //               <img
    //                 loading="lazy"
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2eb8b90ddb2f4ed65562e1d15cfc78273e6ea5a9dd23de3a1463ee2db61c66?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                 className="img-11"
    //               />
    //               <img
    //                 loading="lazy"
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2eb8b90ddb2f4ed65562e1d15cfc78273e6ea5a9dd23de3a1463ee2db61c66?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                 className="img-12"
    //               />
    //             </div>
    //             <div className="div-12">
    //               <div className="div-13">
    //                 <div className="div-14">
    //                   <div className="div-15">
    //                     <img
    //                       loading="lazy"
    //                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca5189d7a623700cb6117d6cc0e3f3e0c5de981ea6ab5872db0915f0098e07cc?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                       className="img-13"
    //                     />
    //                     <div className="div-16">Номер</div>
    //                   </div>
    //                   <div className="div-17">
    //                     <img
    //                       loading="lazy"
    //                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca5189d7a623700cb6117d6cc0e3f3e0c5de981ea6ab5872db0915f0098e07cc?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                       className="img-14"
    //                     />
    //                     <div className="div-18">Кондиціонер</div>
    //                   </div>
    //                 </div>
    //                 <div className="div-19">
    //                   <div className="div-20">
    //                     <img
    //                       loading="lazy"
    //                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a264c8f0f25ea621d45a92a9043f6b65cfd9bb88b1cfdead213b622aaa114b?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                       className="img-15"
    //                     />
    //                     <div className="div-21">Вид на внутрішній двір</div>
    //                   </div>
    //                   <div className="div-22">
    //                     <img
    //                       loading="lazy"
    //                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a264c8f0f25ea621d45a92a9043f6b65cfd9bb88b1cfdead213b622aaa114b?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                       className="img-16"
    //                     />
    //                     <div className="div-23">Власна ванна кімната</div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="div-24">
    //                 <img
    //                   loading="lazy"
    //                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca5189d7a623700cb6117d6cc0e3f3e0c5de981ea6ab5872db0915f0098e07cc?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                   className="img-17"
    //                 />
    //                 <div className="div-25">Телевізор з плоским екраном</div>
    //                 <div className="div-26">
    //                   <img
    //                     loading="lazy"
    //                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a264c8f0f25ea621d45a92a9043f6b65cfd9bb88b1cfdead213b622aaa114b?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                     className="img-18"
    //                   />
    //                   <div className="div-27">Міні-бар</div>
    //                 </div>
    //               </div>
    //               <div className="div-28">
    //                 <div className="div-29">
    //                   <img
    //                     loading="lazy"
    //                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca5189d7a623700cb6117d6cc0e3f3e0c5de981ea6ab5872db0915f0098e07cc?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                     className="img-19"
    //                   />
    //                   <div className="div-30">Звукоізоляція</div>
    //                 </div>
    //                 <div className="div-31">
    //                   <img
    //                     loading="lazy"
    //                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a264c8f0f25ea621d45a92a9043f6b65cfd9bb88b1cfdead213b622aaa114b?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                     className="img-20"
    //                   />
    //                   <div className="div-32">Безкоштовний Wi-Fi</div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="div-33">Зручності у номері: ​</div>
    //             <div className="div-34">
    //               <div className="div-35">
    //                 <div className="column">
    //                   <div className="div-36">
    //                     Сейф
    //                     <br />
    //                     На верхні поверхи можна піднятися тільки сходами
    //                     <br />
    //                     Телевізор з плоским екраном
    //                     <br />
    //                     Послуга дзвінок-&quot;будильник&quot;
    //                     <br />
    //                     Рушники
    //                     <br />
    //                     Розетка поблизу з ліжком
    //                     <br />
    //                     Телевізор
    //                   </div>
    //                 </div>
    //                 <div className="column-6">
    //                   <div className="div-37">
    //                     Холодильник
    //                     <br />
    //                     Білизна
    //                     <br />
    //                     Міні-бар
    //                     <br />
    //                     Килимове покриття
    //                     <br />
    //                     Опалення
    //                     <br />
    //                     Гардеробна
    //                     <br />
    //                     Кабельні канали
    //                     <br />
    //                     Звукоізоляція
    //                     <br />
    //                     Москітна сітка
    //                     <br />
    //                     Кондиціонер
    //                     <br />
    //                     Вішалка для одягу
    //                     <br />
    //                     Робочий стіл
    //                     <br />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="div-38">У вашій власній ванній кімнаті:</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="div-39">
    //       <div className="div-40">
    //         <div className="column">
    //           <div className="div-41">
    //             <div className="div-42">
    //               <img
    //                 loading="lazy"
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca5189d7a623700cb6117d6cc0e3f3e0c5de981ea6ab5872db0915f0098e07cc?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                 className="img-21"
    //               />
    //               <div className="div-43">Засоби гігієни</div>
    //             </div>
    //             <div className="div-44">
    //               <img
    //                 loading="lazy"
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca5189d7a623700cb6117d6cc0e3f3e0c5de981ea6ab5872db0915f0098e07cc?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                 className="img-22"
    //               />
    //               <div className="div-45">Ванна або душ</div>
    //             </div>
    //             <div className="div-46">
    //               <img
    //                 loading="lazy"
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca5189d7a623700cb6117d6cc0e3f3e0c5de981ea6ab5872db0915f0098e07cc?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                 className="img-23"
    //               />
    //               <div className="div-47">Туалетний папір</div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="column-7">
    //           <div className="div-48">
    //             <div className="div-49">
    //               <img
    //                 loading="lazy"
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a264c8f0f25ea621d45a92a9043f6b65cfd9bb88b1cfdead213b622aaa114b?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                 className="img-24"
    //               />
    //               <div className="div-50">Туалет</div>
    //             </div>
    //             <div className="div-51">
    //               <img
    //                 loading="lazy"
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a264c8f0f25ea621d45a92a9043f6b65cfd9bb88b1cfdead213b622aaa114b?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                 className="img-25"
    //               />
    //               <div className="div-52">Капці</div>
    //             </div>
    //             <div className="div-53">
    //               <img
    //                 loading="lazy"
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a264c8f0f25ea621d45a92a9043f6b65cfd9bb88b1cfdead213b622aaa114b?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"
    //                 className="img-26"
    //               />
    //               <div className="div-54">Фен</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="div-55">Вид:</div>
    //     <div className="div-56">Розмір номера 10 м²</div>
    //     <div className="div-57">1 двоспальне ліжко</div>
    //     <div className="div-58">
    //       Зручні ліжка (оцінка 8.9) – на основі 791 відгуку
    //     </div>
    //     <div className="div-59">
    //       Двомісний номер з окремою ванною кімнатою з душем, феном, капцями та
    //       безкоштовними туалетно-косметичними засобами. Цей звуконепроникний
    //       двомісний номер оснащено кондиціонером, телевізором із плоским екраном
    //       і кабельними каналами, міні-баром і сейфом. З вікон відкривається вид
    //       на внутрішній дворик. У цьому варіанті розміщення встановлено 1 ліжко.
    //     </div>
    //     <div className="div-60">Куріння:</div>
    //     <div className="div-61">Для некурців</div>
    //   </div>
    //   <style jsx>{`
    //     .div {
    //       background-color: #fff;
    //       display: flex;
    //       flex-direction: column;
    //       padding: 10px 10px 17px 30px;
    //     }
    //     @media (max-width: 991px) {
    //       .div {
    //         padding-left: 20px;
    //       }
    //     }
    //     .div-2 {
    //     }
    //     @media (max-width: 991px) {
    //       .div-2 {
    //         max-width: 100%;
    //       }
    //     }
    //     .div-3 {
    //       gap: 20px;
    //       display: flex;
    //     }
    //     @media (max-width: 991px) {
    //       .div-3 {
    //         flex-direction: column;
    //         align-items: stretch;
    //         gap: 0px;
    //       }
    //     }
    //     .column {
    //       display: flex;
    //       flex-direction: column;
    //       line-height: normal;
    //       width: 50%;
    //       margin-left: 0px;
    //     }
    //     @media (max-width: 991px) {
    //       .column {
    //         width: 100%;
    //       }
    //     }
    //     .div-4 {
    //       display: flex;
    //       margin-top: 28px;
    //       flex-direction: column;
    //     }
    //     @media (max-width: 991px) {
    //       .div-4 {
    //         max-width: 100%;
    //         margin-top: 40px;
    //       }
    //     }
    //     .div-5 {
    //       disply: flex;
    //       flex-direction: column;
    //       overflow: hidden;
    //       position: relative;
    //       display: flex;
    //       min-height: 450px;
    //       width: 100%;
    //       justify-content: center;
    //       padding: 80px 9px;
    //     }
    //     @media (max-width: 991px) {
    //       .div-5 {
    //         max-width: 100%;
    //       }
    //     }
    //     .img {
    //       position: absolute;
    //       inset: 0;
    //       height: 100%;
    //       width: 100%;
    //       object-fit: cover;
    //       object-position: center;
    //     }
    //     .div-6 {
    //       position: relative;
    //       display: flex;
    //       gap: 20px;
    //       justify-content: space-between;
    //       margin: 132px 0 90px;
    //     }
    //     @media (max-width: 991px) {
    //       .div-6 {
    //         max-width: 100%;
    //         flex-wrap: wrap;
    //         margin: 40px 0;
    //       }
    //     }
    //     .img-2 {
    //       aspect-ratio: 0.52;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 13px;
    //       stroke-width: 1px;
    //       stroke: #ff4a00;
    //       border-color: rgba(255, 74, 0, 1);
    //       border-style: solid;
    //       border-width: 1px;
    //     }
    //     .img-3 {
    //       aspect-ratio: 0.52;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 13px;
    //       stroke-width: 1px;
    //       stroke: #ff4a00;
    //       border-color: rgba(255, 74, 0, 1);
    //       border-style: solid;
    //       border-width: 1px;
    //     }
    //     .div-7 {
    //       margin-top: 13px;
    //     }
    //     @media (max-width: 991px) {
    //       .div-7 {
    //         max-width: 100%;
    //       }
    //     }
    //     .div-8 {
    //       gap: 20px;
    //       display: flex;
    //     }
    //     @media (max-width: 991px) {
    //       .div-8 {
    //         flex-direction: column;
    //         align-items: stretch;
    //         gap: 0px;
    //       }
    //     }
    //     .column-2 {
    //       display: flex;
    //       flex-direction: column;
    //       line-height: normal;
    //       width: 33%;
    //       margin-left: 0px;
    //     }
    //     @media (max-width: 991px) {
    //       .column-2 {
    //         width: 100%;
    //       }
    //     }
    //     .img-4 {
    //       aspect-ratio: 1.12;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 168px;
    //       max-width: 100%;
    //       flex-grow: 1;
    //     }
    //     @media (max-width: 991px) {
    //       .img-4 {
    //         margin-top: 23px;
    //       }
    //     }
    //     .column-3 {
    //       display: flex;
    //       flex-direction: column;
    //       line-height: normal;
    //       width: 33%;
    //       margin-left: 20px;
    //     }
    //     @media (max-width: 991px) {
    //       .column-3 {
    //         width: 100%;
    //       }
    //     }
    //     .img-5 {
    //       aspect-ratio: 1.12;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 168px;
    //       max-width: 100%;
    //       flex-grow: 1;
    //     }
    //     @media (max-width: 991px) {
    //       .img-5 {
    //         margin-top: 23px;
    //       }
    //     }
    //     .column-4 {
    //       display: flex;
    //       flex-direction: column;
    //       line-height: normal;
    //       width: 33%;
    //       margin-left: 20px;
    //     }
    //     @media (max-width: 991px) {
    //       .column-4 {
    //         width: 100%;
    //       }
    //     }
    //     .img-6 {
    //       aspect-ratio: 1.12;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 168px;
    //       max-width: 100%;
    //       flex-grow: 1;
    //     }
    //     @media (max-width: 991px) {
    //       .img-6 {
    //         margin-top: 23px;
    //       }
    //     }
    //     .column-5 {
    //       display: flex;
    //       flex-direction: column;
    //       line-height: normal;
    //       width: 50%;
    //       margin-left: 20px;
    //     }
    //     @media (max-width: 991px) {
    //       .column-5 {
    //         width: 100%;
    //       }
    //     }
    //     .div-9 {
    //       display: flex;
    //       flex-grow: 1;
    //       flex-direction: column;
    //       margin-bottom: -1px;
    //     }
    //     @media (max-width: 991px) {
    //       .div-9 {
    //         max-width: 100%;
    //         margin-top: 40px;
    //       }
    //     }
    //     .img-7 {
    //       aspect-ratio: 1;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 15px;
    //       stroke-width: 1px;
    //       stroke: #000;
    //       border-color: rgba(0, 0, 0, 1);
    //       border-style: solid;
    //       border-width: 1px;
    //       align-self: end;
    //     }
    //     .div-10 {
    //       color: #111;
    //       margin-top: 19px;
    //       font: 700 32px Inter, sans-serif;
    //     }
    //     @media (max-width: 991px) {
    //       .div-10 {
    //         max-width: 100%;
    //       }
    //     }
    //     .div-11 {
    //       align-self: start;
    //       display: flex;
    //       margin-top: 17px;
    //       gap: 13px;
    //     }
    //     .img-8 {
    //       aspect-ratio: 1.04;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 27px;
    //       fill: #ff4a00;
    //     }
    //     .img-9 {
    //       aspect-ratio: 1.04;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 27px;
    //       fill: #ff4a00;
    //     }
    //     .img-10 {
    //       aspect-ratio: 1.04;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 27px;
    //       fill: #ff4a00;
    //     }
    //     .img-11 {
    //       aspect-ratio: 1.04;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 27px;
    //       fill: #828282;
    //     }
    //     .img-12 {
    //       aspect-ratio: 1.04;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 27px;
    //       fill: #828282;
    //     }
    //     .div-12 {
    //       display: flex;
    //       margin-top: 28px;
    //       flex-direction: column;
    //       align-items: start;
    //       font-size: 20px;
    //       color: #000;
    //       font-weight: 400;
    //       padding: 0 80px 0 11px;
    //     }
    //     @media (max-width: 991px) {
    //       .div-12 {
    //         max-width: 100%;
    //         padding-right: 20px;
    //       }
    //     }
    //     @media (max-width: 640px) {
    //       .div-12 {
    //         margin-right: auto;
    //       }
    //     }
    //     .div-13 {
    //       display: flex;
    //       gap: 14px;
    //     }
    //     @media (max-width: 991px) {
    //       .div-13 {
    //         flex-wrap: wrap;
    //       }
    //     }
    //     @media (max-width: 640px) {
    //       .div-13 {
    //         margin-right: auto;
    //       }
    //     }
    //     .div-14 {
    //       display: flex;
    //       flex-direction: column;
    //       white-space: nowrap;
    //     }
    //     @media (max-width: 991px) {
    //       .div-14 {
    //         white-space: initial;
    //       }
    //     }
    //     .div-15 {
    //       display: flex;
    //       gap: 20px;
    //     }
    //     @media (max-width: 991px) {
    //       .div-15 {
    //         white-space: initial;
    //       }
    //     }
    //     .img-13 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       align-self: start;
    //       margin-top: 4px;
    //     }
    //     .div-16 {
    //       font-family: Inter, sans-serif;
    //       flex-grow: 1;
    //       flex-basis: auto;
    //     }
    //     .div-17 {
    //       display: flex;
    //       margin-top: 32px;
    //       gap: 20px;
    //     }
    //     @media (max-width: 991px) {
    //       .div-17 {
    //         white-space: initial;
    //       }
    //     }
    //     .img-14 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       align-self: start;
    //       margin-top: 5px;
    //     }
    //     .div-18 {
    //       font-family: Inter, sans-serif;
    //       flex-grow: 1;
    //       flex-basis: auto;
    //     }
    //     .div-19 {
    //       align-self: start;
    //       display: flex;
    //       flex-direction: column;
    //       flex-grow: 1;
    //       flex-basis: 0;
    //       width: fit-content;
    //     }
    //     .div-20 {
    //       display: flex;
    //       gap: 10px;
    //     }
    //     .img-15 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       align-self: start;
    //       margin-top: 4px;
    //     }
    //     .div-21 {
    //       font-family: Inter, sans-serif;
    //       flex-grow: 1;
    //       flex-basis: auto;
    //     }
    //     .div-22 {
    //       align-self: end;
    //       display: flex;
    //       margin-top: 32px;
    //       gap: 18px;
    //     }
    //     .img-16 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       align-self: start;
    //     }
    //     .div-23 {
    //       font-family: Inter, sans-serif;
    //       flex-grow: 1;
    //       flex-basis: auto;
    //     }
    //     .div-24 {
    //       display: flex;
    //       margin-top: 31px;
    //       gap: 20px;
    //     }
    //     @media (max-width: 991px) {
    //       .div-24 {
    //         flex-wrap: wrap;
    //       }
    //     }
    //     .img-17 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       align-self: start;
    //       margin-top: 4px;
    //     }
    //     .div-25 {
    //       font-family: Inter, sans-serif;
    //       flex-grow: 1;
    //       flex-basis: auto;
    //     }
    //     .div-26 {
    //       display: flex;
    //       gap: 14px;
    //       white-space: nowrap;
    //     }
    //     @media (max-width: 991px) {
    //       .div-26 {
    //         white-space: initial;
    //       }
    //     }
    //     .img-18 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       margin: auto 0;
    //     }
    //     .div-27 {
    //       font-family: Inter, sans-serif;
    //     }
    //     .div-28 {
    //       display: flex;
    //       margin-top: 32px;
    //       width: 100%;
    //       gap: 20px;
    //       justify-content: space-between;
    //     }
    //     @media (max-width: 991px) {
    //       .div-28 {
    //         max-width: 100%;
    //         flex-wrap: wrap;
    //       }
    //     }
    //     .div-29 {
    //       display: flex;
    //       gap: 20px;
    //       white-space: nowrap;
    //     }
    //     @media (max-width: 991px) {
    //       .div-29 {
    //         white-space: initial;
    //       }
    //     }
    //     .img-19 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       align-self: start;
    //       margin-top: 4px;
    //     }
    //     .div-30 {
    //       font-family: Inter, sans-serif;
    //       flex-grow: 1;
    //       flex-basis: auto;
    //     }
    //     .div-31 {
    //       align-self: start;
    //       display: flex;
    //       gap: 9px;
    //     }
    //     .img-20 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       align-self: start;
    //     }
    //     .div-32 {
    //       font-family: Inter, sans-serif;
    //       flex-grow: 1;
    //       flex-basis: auto;
    //     }
    //     .div-33 {
    //       color: #111;
    //       margin-top: 67px;
    //       font: 400 32px Inter, sans-serif;
    //     }
    //     @media (max-width: 991px) {
    //       .div-33 {
    //         max-width: 100%;
    //         margin-top: 40px;
    //       }
    //     }
    //     .div-34 {
    //       margin-top: 24px;
    //     }
    //     @media (max-width: 991px) {
    //       .div-34 {
    //         max-width: 100%;
    //       }
    //     }
    //     .div-35 {
    //       gap: 20px;
    //       display: flex;
    //     }
    //     @media (max-width: 991px) {
    //       .div-35 {
    //         flex-direction: column;
    //         align-items: stretch;
    //         gap: 0px;
    //       }
    //     }
    //     .div-36 {
    //       color: #000;
    //       font: 400 20px Inter, sans-serif;
    //     }
    //     @media (max-width: 991px) {
    //       .div-36 {
    //         margin-top: 34px;
    //       }
    //     }
    //     .column-6 {
    //       display: flex;
    //       flex-direction: column;
    //       line-height: normal;
    //       width: 50%;
    //       margin-left: 20px;
    //     }
    //     @media (max-width: 991px) {
    //       .column-6 {
    //         width: 100%;
    //       }
    //     }
    //     .div-37 {
    //       color: #000;
    //       font: 400 20px Inter, sans-serif;
    //     }
    //     @media (max-width: 991px) {
    //       .div-37 {
    //         margin-top: 34px;
    //       }
    //     }
    //     .div-38 {
    //       color: #111;
    //       margin-top: 57px;
    //       font: 400 32px Inter, sans-serif;
    //     }
    //     @media (max-width: 991px) {
    //       .div-38 {
    //         max-width: 100%;
    //         margin-top: 40px;
    //       }
    //     }
    //     .div-39 {
    //       align-self: end;
    //       width: 435px;
    //       max-width: 100%;
    //       margin: 31px 115px 0 0;
    //     }
    //     @media (max-width: 991px) {
    //       .div-39 {
    //         margin-right: 10px;
    //       }
    //     }
    //     .div-40 {
    //       gap: 20px;
    //       display: flex;
    //     }
    //     @media (max-width: 991px) {
    //       .div-40 {
    //         flex-direction: column;
    //         align-items: stretch;
    //         gap: 0px;
    //       }
    //     }
    //     .div-41 {
    //       display: flex;
    //       margin-top: 4px;
    //       flex-grow: 1;
    //       flex-direction: column;
    //       font-size: 20px;
    //       color: #000;
    //       font-weight: 400;
    //     }
    //     @media (max-width: 991px) {
    //       .div-41 {
    //         margin-top: 40px;
    //       }
    //     }
    //     .div-42 {
    //       display: flex;
    //       gap: 20px;
    //     }
    //     .img-21 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       align-self: start;
    //     }
    //     .div-43 {
    //       font-family: Inter, sans-serif;
    //       flex-grow: 1;
    //       flex-basis: auto;
    //     }
    //     .div-44 {
    //       display: flex;
    //       margin-top: 45px;
    //       gap: 20px;
    //     }
    //     @media (max-width: 991px) {
    //       .div-44 {
    //         margin-top: 40px;
    //       }
    //     }
    //     .img-22 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       align-self: start;
    //     }
    //     .div-45 {
    //       font-family: Inter, sans-serif;
    //       flex-grow: 1;
    //       flex-basis: auto;
    //     }
    //     .div-46 {
    //       display: flex;
    //       margin-top: 41px;
    //       gap: 20px;
    //     }
    //     @media (max-width: 991px) {
    //       .div-46 {
    //         margin-top: 40px;
    //       }
    //     }
    //     .img-23 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       align-self: start;
    //       margin-top: 4px;
    //     }
    //     .div-47 {
    //       font-family: Inter, sans-serif;
    //       flex-grow: 1;
    //       flex-basis: auto;
    //     }
    //     .column-7 {
    //       display: flex;
    //       flex-direction: column;
    //       line-height: normal;
    //       width: 50%;
    //       margin-left: 20px;
    //     }
    //     @media (max-width: 991px) {
    //       .column-7 {
    //         width: 100%;
    //       }
    //     }
    //     .div-48 {
    //       display: flex;
    //       flex-grow: 1;
    //       flex-direction: column;
    //       font-size: 20px;
    //       color: #000;
    //       font-weight: 400;
    //       white-space: nowrap;
    //     }
    //     @media (max-width: 991px) {
    //       .div-48 {
    //         margin-top: 40px;
    //         white-space: initial;
    //       }
    //     }
    //     @media (max-width: 640px) {
    //       .div-48 {
    //         margin-right: auto;
    //         width: 100%;
    //       }
    //     }
    //     .div-49 {
    //       display: flex;
    //       gap: 20px;
    //       justify-content: space-between;
    //     }
    //     @media (max-width: 991px) {
    //       .div-49 {
    //         white-space: initial;
    //       }
    //     }
    //     .img-24 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       align-self: start;
    //       margin-top: 5px;
    //     }
    //     .div-50 {
    //       font-family: Inter, sans-serif;
    //     }
    //     @media (max-width: 640px) {
    //       .div-50 {
    //         margin-right: auto;
    //       }
    //     }
    //     .div-51 {
    //       display: flex;
    //       margin-top: 45px;
    //       gap: 20px;
    //       justify-content: space-between;
    //     }
    //     @media (max-width: 991px) {
    //       .div-51 {
    //         margin-top: 40px;
    //         white-space: initial;
    //       }
    //     }
    //     .img-25 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       align-self: start;
    //     }
    //     .div-52 {
    //       font-family: Inter, sans-serif;
    //     }
    //     @media (max-width: 640px) {
    //       .div-52 {
    //         margin-right: auto;
    //       }
    //     }
    //     .div-53 {
    //       display: flex;
    //       margin-top: 41px;
    //       gap: 20px;
    //       justify-content: space-between;
    //     }
    //     @media (max-width: 991px) {
    //       .div-53 {
    //         margin-top: 40px;
    //         white-space: initial;
    //       }
    //     }
    //     .img-26 {
    //       aspect-ratio: 1.06;
    //       object-fit: auto;
    //       object-position: center;
    //       width: 16px;
    //       fill: #ff4a00;
    //       align-self: start;
    //       margin-top: 4px;
    //     }
    //     .div-54 {
    //       font-family: Inter, sans-serif;
    //     }
    //     @media (max-width: 640px) {
    //       .div-54 {
    //         margin-right: auto;
    //       }
    //     }
    //     .div-55 {
    //       color: #111;
    //       align-self: end;
    //       width: 50%;
    //       margin: 68px 0 0 20px;
    //       font: 400 32px Inter, sans-serif;
    //     }
    //     @media (max-width: 991px) {
    //       .div-55 {
    //         margin-top: 40px;
    //       }
    //     }
    //     @media (max-width: 640px) {
    //       .div-55 {
    //         align-self: start;
    //       }
    //     }
    //     .div-56 {
    //       color: #111;
    //       align-self: end;
    //       width: 50%;
    //       margin: 58px 20px 0 0;
    //       font: 400 32px Inter, sans-serif;
    //     }
    //     @media (max-width: 991px) {
    //       .div-56 {
    //         margin: 40px 10px 0 0;
    //       }
    //     }
    //     @media (max-width: 640px) {
    //       .div-56 {
    //         align-self: start;
    //       }
    //     }
    //     .div-57 {
    //       color: #000;
    //       align-self: end;
    //       width: 50%;
    //       margin: 26px 0 0 20px;
    //       font: 400 20px Inter, sans-serif;
    //     }
    //     @media (max-width: 640px) {
    //       .div-57 {
    //         align-self: start;
    //       }
    //     }
    //     .div-58 {
    //       color: #000;
    //       align-self: end;
    //       width: 50%;
    //       margin: 27px 0 0 20px;
    //       font: 400 20px Inter, sans-serif;
    //     }
    //     @media (max-width: 991px) {
    //       .div-58 {
    //         max-width: 100%;
    //         margin-right: 10px;
    //       }
    //     }
    //     @media (max-width: 640px) {
    //       .div-58 {
    //         align-self: start;
    //       }
    //     }
    //     .div-59 {
    //       color: #000;
    //       align-self: end;
    //       text-align: left;
    //       width: 50%;
    //       margin: 27px 20px 0;
    //       font: 400 20px Inter, sans-serif;
    //     }
    //     @media (max-width: 991px) {
    //       .div-59 {
    //         max-width: 100%;
    //         margin-right: 10px;
    //       }
    //     }
    //     @media (max-width: 640px) {
    //       .div-59 {
    //         align-self: start;
    //         width: 100%;
    //       }
    //     }
    //     .div-60 {
    //       color: #111;
    //       align-self: end;
    //       width: 50%;
    //       margin: 55px 0 0 20px;
    //       font: 400 32px Inter, sans-serif;
    //     }
    //     @media (max-width: 991px) {
    //       .div-60 {
    //         margin-top: 40px;
    //       }
    //     }
    //     @media (max-width: 640px) {
    //       .div-60 {
    //         align-self: start;
    //       }
    //     }
    //     .div-61 {
    //       color: #000;
    //       align-self: end;
    //       width: 50%;
    //       margin: 11px 0 0 20px;
    //       font: 400 20px Inter, sans-serif;
    //     }
    //     @media (max-width: 640px) {
    //       .div-61 {
    //         align-self: start;
    //       }
    //     }
    //   `}</style>
    // </>
  )
}

export default Room