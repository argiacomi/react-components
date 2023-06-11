import Snackbar from './Snackbar';
import { useSnackbarQueue } from './SnackbarContext';

const SnackbarContainer = ({ snackbarQueue }) => {
  const { removeSnackbar } = useSnackbarQueue();

  console.log('container', snackbarQueue);

  return (
    <div>
      {snackbarQueue.map((snackbar, i) => (
        <Snackbar
          key={i}
          {...snackbar}
          onClose={() => {
            snackbar.onClose?.();
            removeSnackbar();
          }}
        />
      ))}
    </div>
  );
};

export default SnackbarContainer;
