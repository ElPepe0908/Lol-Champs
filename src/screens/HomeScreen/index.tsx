import {
  CardsContainer,
  DifficultyFiltersContainer,
  HomeScreenBody,
  HomeScreenContainer,
  HomeScreenHeader,
  Logo,
  LogoContainer,
  LogoutButton,
  LogoutText,
  SearchBar,
  SearchBarContainer,
  SideBar,
  SideBarDivider,
  MenuContainer,
  LogoContainerResponsive,
  ArrowIconContainer,
  SeachArrowContainer,
  RolesFilter,
  RolesFilterContainer,
  DifficultyFilter,
  DeleteButton,
  SearchIcon,
  DeleteTextButton,
  BackToChampArrow,
  NavToLoginIcon,
} from "./styles";
import lolLogo from "../../assets/lol-logo.png";
import { Sidebar } from "./Sidebar";
import { Datum } from "../../interfaces/NewChampsListResponse";
import { FilterRoleButton } from "../../components/FilterRoleButton";
import { useChampsData } from "../../hooks/useChampsData";
import { LazyChamps } from "../../components/LazyChamps";
import { FilterDifficultyButton } from "../../components/FilterDifficultyButton";

const HomeScreen = () => {
  const {
    searchChamp,
    handleInputChange,
    handleDeleteButtonClick,
    backToOriginalChamps,
    searchValue,
    champsFiltered,
    navigateToLastChampDetail,
    state,
    navigateToLogin,
  } = useChampsData();

  console.log("champsFiltered from homeScreen", champsFiltered);
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
        <SeachArrowContainer>
          <MenuContainer>
            <Sidebar />
          </MenuContainer>

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
              championName={state?.championName}
              onClick={navigateToLastChampDetail}
            />
          </ArrowIconContainer>
        </SeachArrowContainer>
      </HomeScreenHeader>

      <HomeScreenBody>
        <SideBar>
          <RolesFilterContainer>
            <RolesFilter>Roles</RolesFilter>
            <FilterRoleButton />
          </RolesFilterContainer>

          <DifficultyFiltersContainer>
            <DifficultyFilter>Difficulty</DifficultyFilter>
            <FilterDifficultyButton />
          </DifficultyFiltersContainer>
          <LogoutButton>
            <NavToLoginIcon onClick={navigateToLogin} />
            <LogoutText onClick={navigateToLogin}>Log Out</LogoutText>
          </LogoutButton>
        </SideBar>
        <SideBarDivider />
        <CardsContainer>
          {champsFiltered.map((champDetail: Datum, index: number) => {
            return (
              <LazyChamps
                key={`${champDetail.id} - ${index}`}
                champDetail={champDetail}
              />
            );
          })}
        </CardsContainer>
      </HomeScreenBody>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
