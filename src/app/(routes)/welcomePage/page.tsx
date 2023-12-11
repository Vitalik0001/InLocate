// Components
import {Button} from "@/components/Button";

// Styles
import './index.sass';

const WelcomePage = () => {
  return (
    <div className="welcome__wrapper">
      <div className="welcome__text text">
        <h1 className="text__title">InLocate</h1>
        <div className="text__subtitle">
          <div className="text__line"/>
          <p>
            Легко відслідковуйте позиції людей в реальному часі. Просто виберіть зону або приміщення, і наша система
            надасть Вам актуальну інформацію про розташування осіб прямо на мапі. Це ідеальний інструмент для
            оперативного
            реагування на екстрені ситуації та забезпечення загальної безпеки. Приєднуйтесь до нашої спільноти і робіть
            ваше оточення ще безпечнішим!
          </p>
        </div>
        <div className="welcome__button">
          <Button classes="mt-10 py-2 px-5 border-white border-2 rounded-lg" text="Увійти"/>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
