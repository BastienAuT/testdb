import { downloadAUrl } from 'better-file-downloader';
import './styles.scss';

const CvItem = () => {

  const download = async url => {
    await downloadAUrl(url, {
      fileName: 'cv_Bastien_Autem',
      extension: '.png',
      contentType: 'application/pdf',
    });
  };
  return (
  <button
  className='button'
  type="button"
  onClick={() =>
    download('https://i.postimg.cc/bNHWnMXf/Bastien-Autem-2.png')
  }
  >
  TELECHARGER
  </button>
  );
}

export default CvItem;