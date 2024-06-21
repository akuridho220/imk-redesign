import { useSearchParams } from "react-router-dom";
import BoxHeader from "../../components/BoxHeader";

const SampleInformasi = ({params}) => {
    const [queryParameters] = useSearchParams()
    return (
        <div className="content flex flex-col items-center m-2 md:m-4">
            <BoxHeader title={queryParameters.get("judul")}/>
            <p className="text-justify my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem inventore quasi non sapiente, in vero ad consequatur ipsam deserunt voluptate labore omnis, sint esse consequuntur, eius fuga aspernatur cumque ratione molestias qui illo molestiae nulla sunt? Nemo repellendus mollitia nihil obcaecati amet adipisci, magni tenetur quibusdam sunt soluta odit? Quam quasi quia nam repellat labore. Eius voluptatibus architecto enim vitae doloremque nam aut perspiciatis autem qui vero distinctio vel tempora suscipit est, illo velit repudiandae ducimus nisi saepe natus? Perferendis consequuntur voluptatibus nulla. Beatae sapiente amet velit modi alias quas, ullam quos, libero officiis hic nesciunt eius vel inventore! Qui?</p>
            <p className="text-justify my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo vitae quam odit id soluta! Rem similique quas cumque nesciunt est, natus optio rerum iste autem porro dolor inventore, consequuntur non eum odio, eos maxime ex doloribus? Laboriosam, illum tempore! Iste accusamus deserunt consequatur debitis accusantium, rem ullam dignissimos, necessitatibus laboriosam ab porro exercitationem possimus impedit magnam rerum expedita perferendis iure cupiditate qui aperiam saepe. Libero, consequatur. Deserunt commodi ipsam dignissimos cupiditate earum, nam libero consequatur sed illum quaerat aspernatur quos repudiandae veniam nesciunt sapiente quis odio possimus praesentium. Sunt consequuntur inventore, dolores velit quo sint cum nesciunt reiciendis expedita facere unde corrupti earum iste ipsa repellendus. Commodi aut neque cumque doloremque nam. Repellat beatae cupiditate aliquam, quia fuga debitis illum voluptas porro blanditiis magni distinctio doloremque nesciunt in quisquam quo excepturi adipisci reiciendis? Fugiat provident natus molestias earum aut. Laudantium eligendi suscipit eaque veniam ratione ea sed voluptatem explicabo quasi!</p>

        </div>
    )
}

export default SampleInformasi;