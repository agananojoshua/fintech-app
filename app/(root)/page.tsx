import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalancebox from '@/components/TotalBalancebox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {

  const loggedIn = await  getLoggedInUser();

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest' }
            subtext="Access and manage Your Account and 
            transaction efficiently"
          />
          <TotalBalancebox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTION
      </div>
      <RightSidebar user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance: 1345.90, }, { currentBalance: 300 }]}/>
    </section>
  )
}

export default Home