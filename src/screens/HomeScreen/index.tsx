import {
  CardsContainer,
  HomeScreenBody,
  HomeScreenContainer,
  HomeScreenHeader,
  Logo,
  LogoContainer,
  SearchBar,
  SearchBarContainer,
  SideBarDivider,
  MenuContainer,
  LogoContainerResponsive,
  ArrowIconContainer,
  SearchArrowContainer,
  DeleteButton,
  SearchIcon,
  DeleteTextButton,
  BackToChampArrow,
} from "./styles";
import lolLogo from "../../assets/lol-logo.png";
import { Sidebar } from "../../components/Sidebar";
import { Datum } from "../../interfaces/NewChampsListResponse";
import { ChampToRender } from "../../components/ChampToRender";
import { useHomeScreen } from "../../hooks/useHomeScreen";

const HomeScreen = () => {
  const {
    searchChamp,
    handleInputChange,
    handleDeleteButtonClick,
    backToOriginalChamps,
    searchValue,
    champsFiltered,
    navigateToLastChampDetail,
    navigateToLogin,
    championName,
    originalChampsData,
    selectFilter,
    selectedRole,
    showClickedRole,
    handleClickFilter,
    getChampsByTag,
    handleRoleOver,
    handleRoleOut,
    getChampsByDifficulty,
    toggleDrawer,
    drawerState,
    isFetchingChamps,
    handleMouseOver,
    handleMouseOut,
    navigateToChampionDetail,
    show,
    hoveredChamp,
  } = useHomeScreen();

  return (
    <HomeScreenContainer>
      <HomeScreenHeader>
        <LogoContainerResponsive>
          <Logo
            src={lolLogo}
            alt="league-of-legends-logo"
            onClick={backToOriginalChamps}
          />
        </LogoContainerResponsive>

        <LogoContainer>
          <Logo
            src={lolLogo}
            alt="league-of-legends-logo"
            onClick={backToOriginalChamps}
          />
        </LogoContainer>
        <SearchArrowContainer>
          <MenuContainer />

          <SearchBarContainer>
            <SearchIcon />

            <SearchBar
              type="text"
              placeholder="Search champ"
              name="searchValue"
              value={searchValue}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <DeleteButton
              searchChamp={searchChamp}
              onClick={handleDeleteButtonClick}
            >
              <DeleteTextButton />
            </DeleteButton>
          </SearchBarContainer>

          <ArrowIconContainer>
            <BackToChampArrow
              championName={championName}
              onClick={navigateToLastChampDetail}
            />
          </ArrowIconContainer>
        </SearchArrowContainer>
      </HomeScreenHeader>

      <HomeScreenBody>
        <Sidebar
          champsFiltered={champsFiltered}
          originalChampsData={originalChampsData}
          getChampsByDifficulty={getChampsByDifficulty}
          getChampsByTag={getChampsByTag}
          handleClickFilter={handleClickFilter}
          handleRoleOut={handleRoleOut}
          handleRoleOver={handleRoleOver}
          selectFilter={selectFilter}
          selectedRole={selectedRole}
          showClickedRole={showClickedRole}
          navigateToLogin={navigateToLogin}
          toggleDrawer={toggleDrawer}
          drawerState={drawerState}
        />

        <SideBarDivider />
        <CardsContainer>
          {champsFiltered.map((champDetail: Datum, index: number) => (
            <ChampToRender
              key={`${champDetail.id} - ${index}`}
              champDetail={champDetail}
              isFetchingChamps={isFetchingChamps}
              handleMouseOver={() => handleMouseOver(champDetail.name)}
              handleMouseOut={handleMouseOut}
              navigateToChampionDetail={navigateToChampionDetail}
              show={show}
              hoveredChamp={hoveredChamp}
            />
          ))}
        </CardsContainer>
      </HomeScreenBody>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
