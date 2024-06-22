import { useSearchParams } from "react-router-dom";
import BoxHeader from "../../components/BoxHeader";

const SampleInformasi = ({params}) => {
    const [queryParameters] = useSearchParams()
    return (
        <>
        <nav class="flex mx-4 md:mx-8 lg:mx-16 xl:mx-36 py-4" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
            <a href="/si-ppid" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
                SI-PPID
            </a>
            </li>
            <li aria-current="page">
            <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Contoh SIPPID</span>
            </div>
            </li>
        </ol>
        </nav>

        <div className="content flex flex-col items-center m-2 md:m-4">
            <BoxHeader title={queryParameters.get("judul")}/>
            <p className="text-justify my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem inventore quasi non sapiente, in vero ad consequatur ipsam deserunt voluptate labore omnis, sint esse consequuntur, eius fuga aspernatur cumque ratione molestias qui illo molestiae nulla sunt? Nemo repellendus mollitia nihil obcaecati amet adipisci, magni tenetur quibusdam sunt soluta odit? Quam quasi quia nam repellat labore. Eius voluptatibus architecto enim vitae doloremque nam aut perspiciatis autem qui vero distinctio vel tempora suscipit est, illo velit repudiandae ducimus nisi saepe natus? Perferendis consequuntur voluptatibus nulla. Beatae sapiente amet velit modi alias quas, ullam quos, libero officiis hic nesciunt eius vel inventore! Qui?</p>
            <p className="text-justify my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo vitae quam odit id soluta! Rem similique quas cumque nesciunt est, natus optio rerum iste autem porro dolor inventore, consequuntur non eum odio, eos maxime ex doloribus? Laboriosam, illum tempore! Iste accusamus deserunt consequatur debitis accusantium, rem ullam dignissimos, necessitatibus laboriosam ab porro exercitationem possimus impedit magnam rerum expedita perferendis iure cupiditate qui aperiam saepe. Libero, consequatur. Deserunt commodi ipsam dignissimos cupiditate earum, nam libero consequatur sed illum quaerat aspernatur quos repudiandae veniam nesciunt sapiente quis odio possimus praesentium. Sunt consequuntur inventore, dolores velit quo sint cum nesciunt reiciendis expedita facere unde corrupti earum iste ipsa repellendus. Commodi aut neque cumque doloremque nam. Repellat beatae cupiditate aliquam, quia fuga debitis illum voluptas porro blanditiis magni distinctio doloremque nesciunt in quisquam quo excepturi adipisci reiciendis? Fugiat provident natus molestias earum aut. Laudantium eligendi suscipit eaque veniam ratione ea sed voluptatem explicabo quasi!</p>

        </div>
        </>
    )
}

export default SampleInformasi;