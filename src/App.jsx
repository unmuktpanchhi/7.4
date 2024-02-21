import './App.css'
import { RecoilRoot, useRecoilValue } from "recoil";
import { networkAtom, notificationAtom, jobsAtom, messagingAtom, totalNotificationSelector } from "./atoms"

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp(){
  const  networkAtomCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  //const totalnotificationCount = useMemo(()=> {
  //  return networkAtomCount + jobsAtomCount +  messagingAtomCount + notificationAtomCount;
 // }, [networkAtomCount, jobsAtomCount,messagingAtomCount, notificationAtomCount])
   
  return (
    <>
    <button>Home</button>
    <button>My Network({networkAtomCount >=100 ? "99+" : networkAtomCount}) </button>
    <button>Jobs({jobsAtomCount}) </button>
    <button>Messaging({messagingAtomCount >=100 ? "99+" : messagingAtomCount}) </button>
    <button>Notifications({notificationAtomCount >=100 ? "99+" : notificationAtomCount}) </button>
    <button>Me({totalNotificationCount})</button>
    </>
  )
}
export default App
