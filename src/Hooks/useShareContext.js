import {useContext} from 'react'
import {UserContext,AgeContext} from "./App";

export default function useShareContext(){
  const user = useContext(UserContext)
  const age = useContext(AgeContext)

  return [user,age]
}
