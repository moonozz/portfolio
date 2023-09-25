import { useEffect, useRef, useState } from 'react';

export const useScrollEvent = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return; // 요소가 아직 준비되지 않은 경우 중단

    const callback = el => {
      el.forEach(entry => {
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 나타났을 경우
          setIsInViewport(true);
        } else {
          // 요소가 뷰포트를 벗어난 경우
          setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: '0px', threshold: 0 }; // root: 기본 값은 브라우저 뷰포트(null 이 기본값) ,  rootMargin: root가 가진 여백 기본값은 0, threshold: 0에서 1까지 숫자 값이 들어가는데 root와 observer 요소가 얼마나 교차되었는지 따라 결정하고 0이 기본값임

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current); // 요소 관찰 시작

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return { isInViewport, ref };
};
