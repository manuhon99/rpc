import React from 'react';
import Head from "next/head";
import moment from 'moment';
import styles from "../styles/components/CreateNewTeam.module.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Função que exibe a programação do dia escolhido pelo usuário
export default function tvShows({tvShowsList}) {
  const now = moment().unix();
  return (
    <div className={styles.container}>

      <Head>
        <title>Squad Management Tool</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" href="/icons/logo.svg" />
      </Head>

      <Navbar></Navbar>
      
      <div className={styles.createContainer}>
        <div className={styles.createTopBar}>
          <h1>Create your team</h1>
        </div>

        <div className={styles.titleArea}>
        <h1>TEAM INFORMATION</h1>
        </div>
        

        <div className={styles.teamInformationContainer}>
          <div className={styles.left}>

            <label htmlFor="name">Team name</label>
            <input id="name" name="name" type="text" placeholder="Insert team name"/>
            <label htmlFor="name">Description</label>
            <input id="description" description="description" type="text"/>


          </div>
          <div className={styles.right}>
            <label htmlFor="website">Team website</label>
            <input id="website" name="website" type="text" placeholder="http://myteam.com"/>
            <label htmlFor="name">Team type</label>
            
            <label htmlFor="name">Tags</label>
            <input id="tags" description="tags" type="text"/>
          </div>
        </div>

        <div className={styles.titleArea}>
        <h1>CONFIGURE SQUAD</h1>
        </div>

        <div className={styles.configureSquadContainer}>
          <div className={styles.formation}>
            <label htmlFor="name">Team name</label>
            <input id="name" name="name" type="text" placeholder="Insert team name"/>
            <label htmlFor="name">Description</label>
            <input id="description" description="description" type="text"/>
          </div>
          <div className={styles.players}>
            <label htmlFor="website">Team website</label>
            <input id="website" name="website" type="text" placeholder="http://myteam.com"/>
            <label htmlFor="name">Team type</label>
            
            <label htmlFor="name">Tags</label>
            <input id="tags" description="tags" type="text"/>
          </div>
        </div>

      </div>      
      <Footer></Footer>
    </div>
  );
}
